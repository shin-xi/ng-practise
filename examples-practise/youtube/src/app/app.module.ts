import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBoxComponent } from './search-box/search-box.component';

import { YOUTUBE_API_KEY, YOUTUBE_API_URL, YoutubeService } from './service/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: YoutubeService, useClass: YoutubeService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
