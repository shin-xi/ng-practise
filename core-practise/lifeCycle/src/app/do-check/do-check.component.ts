import {Component, DoCheck, IterableDiffers} from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements DoCheck {
  comments: any[];
  iterable: boolean;
  authors: string[];
  texts: string[];
  differ: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.comments = [];

    this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
    this.texts = [
      'we surely will come back for moreof the same another day soon.', 'Really cool!', 'Thanks!'
    ];

    this.addComment();
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  getRandomItem(array: string[]): string {
    const pos: number = this.getRandomInt(array.length - 1);
    return array[pos];
  }

  addComment(): void {
    this.comments.push({
      author: this.getRandomItem(this.authors),
      comment: this.getRandomItem(this.texts),
      likes: this.getRandomInt(20)
    });
  }

  removeComment(comment): void {
    const pos = this.comments.indexOf(comment);
    this.comments.splice(pos, 1);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comments);

    if (changes) {
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }

}
