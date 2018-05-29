import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from '../dogs.service'
import { Dog } from '../dog';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {
  dog: Dog = new Dog();
  dogs = new Array<Dog>();
  constructor(private dogsService: DogsService, private route: ActivatedRoute,private location: Location) { 
    this.dogs = dogsService.getDogs();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dog = this.dogsService.getDog(params.id - 1);
    });
  }

  UpdateDog(updatedDog) {
    this.dog.name = updatedDog.name;
    this.dog.owner = updatedDog.owner;
    this.dog.weight = updatedDog.weight;
    this.location.back();
  }

}
