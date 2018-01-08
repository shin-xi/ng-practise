import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnChanges {
  @Input() name: string;
  @Input() comment: string;

  constructor() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    console.log('Changes', changes);
  }

}
