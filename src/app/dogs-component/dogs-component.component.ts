import { Component, OnInit } from '@angular/core';

const DOGS = [
  { name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), owner: 'Jack Daniels',sign : 'minus' },
  { name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), owner: 'Mike Perry',sign : 'minus' },
  { name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), owner: 'Sarah Abrahamson',sign : 'minus' },
  { name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), owner: 'Lara Croft',sign : 'minus' },
  { name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), owner: 'Jerry Seinfeld',sign : 'minus' }
];

@Component({
  selector: 'app-dogs-component',
  templateUrl: './dogs-component.component.html',
  styleUrls: ['./dogs-component.component.scss']
})
export class DogsComponentComponent implements OnInit {

  dogs = DOGS;
  constructor() { }
  removeDog(index) {
    this.dogs.splice(index, 1);
  }
  toggleSign(i) {
    if (this.dogs[i].sign == 'plus') {
      this.dogs[i].sign = 'minus';
    } else {
      this.dogs[i].sign = 'plus';
    }
  }
  ngOnInit() {
  }

}
