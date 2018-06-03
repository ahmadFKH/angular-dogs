import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {

  currentDogs: number;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.currentDogs = this.dogsService.currentNumber;
    this.dogsService.numberUpdated.subscribe((number) => {
      this.currentDogs += number;
    })
  }


}
