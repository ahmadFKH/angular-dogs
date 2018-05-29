import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';



@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = new Array<Dog>();
  dateFormat = 'fullDate'

  constructor(private dogsService : DogsService, private route: ActivatedRoute) {
    this.dogs = dogsService.getDogs();
   }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      console.log("name query param is: " + queryParams.name)
    });
  }

  removeDog(index) {
    this.dogs.splice(index, 1);
  }

  toggleDate() {
    this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
  }

}
