import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HttpGetComponent } from './http-get/http-get.component';
import { HttpPostComponent } from './http-post/http-post.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HttpJsonpComponent } from './http-jsonp/http-jsonp.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpGetComponent,
    HttpPostComponent,
    HttpJsonpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
