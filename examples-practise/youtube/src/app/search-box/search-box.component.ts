import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchResult } from '../class/search-result';
import { YoutubeService } from '../service/youtube.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubeService,
              private el: ElementRef) {

  }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.next(true))
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe((results: SearchResult[]) => {
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => {
          console.log(err);
        },
        () => {
          this.loading.next(false);
        });
  }

}
