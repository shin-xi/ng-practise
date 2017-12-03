import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../class/search-result';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YoutubeSearchComponent implements OnInit {
  loadingGif = '../assets/images/loading.gif';
  results: SearchResult[];

  constructor() {
  }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results:', this.results);
  }
}
