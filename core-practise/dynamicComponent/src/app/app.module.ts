import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdBannerComponent } from './component/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './component/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './component/hero-profile/hero-profile.component';
import { AdDirective } from './directive/ad.directive';
import { AdService } from './service/ad.service';


@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
