import {Component, DoCheck, EventEmitter, Input, KeyValueDiffers, Output} from '@angular/core';

@Component({
  selector: 'app-do-check-item',
  templateUrl: './do-check-item.component.html',
  styleUrls: ['./do-check-item.component.scss']
})
export class DoCheckItemComponent implements DoCheck {
  @Input() comment: any;
  @Output() onRemove: EventEmitter<any>;
  differ: any;

  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find([]).create();
    this.onRemove = new EventEmitter();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment);

    if (changes) {
      changes.forEachAddedItem(r => this.logChange('added', r));
      changes.forEachRemovedItem(r => this.logChange('removed', r));
      changes.forEachChangedItem(r => this.logChange('changed', r));
    }
  }

  logChange(action, r) {
    if (action === 'added') {
      console.log(action, r.key, 'with', r.currentValue);
    }
    if (action === 'removed') {
      console.log(action, r.key, '(was) ' + r.previousValue + ')');
    }
    if (action === 'changed') {
      console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
    }
  }

  remove(): void {
    this.onRemove.emit(this.comment);
  }

  clear(): void {
    delete this.comment.comment;
  }

  like(): void {
    this.comment.likes += 1;
  }
}
