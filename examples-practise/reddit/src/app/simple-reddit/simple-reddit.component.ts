import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../class/article';

@Component({
  selector: 'app-simple-reddit',
  templateUrl: './simple-reddit.component.html',
  styleUrls: ['./simple-reddit.component.scss']
})
export class SimpleRedditComponent implements OnInit {
  @Input() articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`增加文章标题：${title.value} 和链接：${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
