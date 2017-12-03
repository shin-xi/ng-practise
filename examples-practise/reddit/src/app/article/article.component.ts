import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../class/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {

  }

  ngOnInit() {
  }

  voteUp() {
    this.article.VoteUp();
    return false;
  }

  voteDown() {
    this.article.VoteDown();
    return false;
  }
}
