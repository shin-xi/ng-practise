import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  values1 = '';
  values2 = '';
  values3 = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {
  }

  ngOnInit() {
  }

  onKey(value: HTMLInputElement): void {
    this.values1 += value + '|';
  }

  onEnter(value: HTMLInputElement): void {
    this.values2 += value + '|';
  }

  update(value: HTMLInputElement): void {
    this.values3 += value + '|';
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
