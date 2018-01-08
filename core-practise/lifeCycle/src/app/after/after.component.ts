import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy,
  OnInit, SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-after',
  templateUrl: './after.component.html',
  styleUrls: ['./after.component.scss']
})
export class AfterComponent implements OnInit, OnDestroy, DoCheck, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() counter: number;

  constructor() {
    console.log('AfterCmd -------- [constructor]');
  }

  inc() {
    console.log('AfterCmd -------- [counter]');
    this.counter += 1;
  }

  ngOnInit() {
    console.log('AfterCmd - OnInit');
  }

  ngOnDestroy() {
    console.log('AfterCmp - OnDestroy');
  }

  ngDoCheck() {
    console.log('AfterCmp - DoCheck');
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    console.log('AfterCmp - OnChanges', changes);
  }

  ngAfterContentInit() {
    console.log('AfterCmp - AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterCmp - AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterCmp - AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterCmp - AfterViewChecked');
  }
}
