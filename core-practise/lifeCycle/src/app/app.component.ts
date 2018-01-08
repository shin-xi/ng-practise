import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display: boolean;
  name: string;
  comment: string;
  displayAfters: boolean;
  counter: number;

  constructor() {
    // OnInit and OnDestroy
    this.display = true;

    // OnChange
    this.name = 'shino';
    this.comment = 'I\'m learning so much！';

    // AfterXXX
    this.displayAfters = true;
    this.counter = 1;
  }

  toggle(): void {
    this.display = !this.display;
  }

  setValues(namefld, commentfld): void {
    this.name = namefld.value;
    this.comment = commentfld.value;
  }

  inc(): void {
    this.counter += 1;
  }

  toggleAfters(): void {
    this.displayAfters = !this.displayAfters;
  }
}
