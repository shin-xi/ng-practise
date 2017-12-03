import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../class/search-result';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export const YOUTUBE_API_KEY = 'AIzaSyCp71s1uWyAlmV-GLIi4HMi2Tca13UES30';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeService {
  results: SearchResult[];

  constructor(private http: HttpClient,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((res) => {
        return (<any>res).items.map(item => {
          // console.log('raw item', item);
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }
}
