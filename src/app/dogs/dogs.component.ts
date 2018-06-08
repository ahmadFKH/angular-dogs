import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { ActivatedRoute, Router } from '@angular/router';
import { Walk } from '../walk';
import {MatSnackBar} from '@angular/material/snack-bar';
import { error } from 'util';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  selectedDog: Dog;
  dogs = new Array<Dog>();
  filterTerm: string;
  dateFormat = 'fullDate'


  constructor(private dogsService: DogsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dogsService.getDogs().subscribe(
      dogs => this.dogs = dogs,
      error => {
        console.error(error);
      });
    this.route.queryParams.subscribe(queryParams => {
      this.filterTerm = queryParams.name;
    })
    // this.dogsService.getDogs().subscribe(
    //     dogs => this.dogs = dogs,
    //     error => {
    //       console.error(error);
    //     }
    //   )
    // });
  }


  onFilterChanged(filterString) {
    // this.router.navigate(['.'], { queryParams: { name: filterString } });
    this.dogsService.filterDogs(filterString).subscribe(
      (data) => {
        this.dogs = data;
    }), (error) => {
      console.error(error);
    }

  }

  removeDog(id) {
    this.dogsService.removeDog(id).subscribe(
      (result) => {
        this.dogsService.dogCountSubject.next();
        this.setDogs();
      }),
      error => { console.log(error) };
  }

  toggleDate() {
    this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
  }

  selectDog(dog) {
    this.selectedDog = dog;
  }

  handleAddWalk(walk, score) {
    this.dogsService.addWalk(this.selectedDog, walk);
    // this.dogsService.updateDog(this.selectedDog.id, this.selectedDog);
    this.dogsService.addScore(10);
  }

  setDogs() {
    this.dogsService.getDogs().subscribe(
      (dogs) => {
        this.dogs = dogs;
      }),
      error => { console.log(error) };
  }
}