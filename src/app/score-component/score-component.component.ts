import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-score-component',
  templateUrl: './score-component.component.html',
  styleUrls: ['./score-component.component.scss']
})
export class ScoreComponentComponent implements OnInit {

  score: number;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.score = this.dogsService.currentScore;
    this.dogsService.scoreUpdated.subscribe((score) => {
      this.score += score;
    })
  }
  ngOnDestroy() {
    this.dogsService.scoreUpdated.unsubscribe();
  }

}
