import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Walk } from './walk';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class DogsService {

  score: number = 0;
  public scoreUpdated: Observable<number>;
  public dogCountUpdated: Observable<number>;
  public dogCountSubject: Subject<number>;
  public dogSubject: Subject<Dog>;
  public dogObservable: Observable<Dog>;
  private scoreSubject: Subject<number>;


  constructor(private http: HttpClient) {
    this.scoreSubject = new Subject<number>();
    this.dogCountSubject = new Subject<number>();
    this.dogSubject = new Subject<Dog>();
    this.dogObservable = this.dogSubject.asObservable();
    this.scoreUpdated = this.scoreSubject.asObservable();
    this.dogCountUpdated = this.dogCountSubject.asObservable();
  }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/dogs/' + name);
  }

  getDog(id: number) {
    this.getDogs().subscribe((result) => {
      let dog = result.find((dog) => dog.id == id);
      this.dogSubject.next(dog);
    })
  }


  addDog(newDog: Dog): Observable<Dog> {
    return this.http.post<Dog>('/api/dogs', { dog: newDog });
  }

  updateDog(id: number, dog: Dog) {

    return this.http.put<Dog>('/api/dogs/' + id, {dog : dog});

  }

  removeDog(id) {
    return this.http.delete('/api/dogs/' + id);
  }

  addWalk(dog: Dog, walk: Walk) {
    dog.walks.push(walk);
    this.updateDog(dog.id, dog).subscribe((data) => {
      console.log(data);
    }), (error) => {
      console.error(error);
    }
  }

  addScore(increment) {
    this.score += increment;
    this.scoreSubject.next(this.score);
  }

  getScore() {
    return this.score;
  }
  filterDogs(filterString) {
    return this.http.get<Dog[]>('/api/dogs/' + filterString || '');

  }
}
