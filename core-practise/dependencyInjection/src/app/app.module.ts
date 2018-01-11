import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiSampleComponent } from './component/di-sample/di-sample.component';
import { DiClassComponent } from './component/di-class/di-class.component';
import { DiValueComponent } from './component/di-value/di-value.component';
import { DiExistingComponent } from './component/di-existing/di-existing.component';
import { DiSampleService } from './service/di-sample.service';
import { DiFactoryComponent } from './component/di-factory/di-factory.component';
import { DiExample1Component } from './component/di-example1/di-example1.component';
import { API_URL, ApiService } from './service/api.service';
import { ViewPortService } from './service/view-port.service';
import { DiExample2Component } from './component/di-example2/di-example2.component';

const isProduction = true;

@NgModule({
  declarations: [
    AppComponent,
    DiSampleComponent,
    DiClassComponent,
    DiValueComponent,
    DiExistingComponent,
    DiFactoryComponent,
    DiExample1Component,
    DiExample2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: DiSampleService, useClass: DiSampleService },
    ApiService,
    { provide: 'ApiServiceAlias', useExisting: ApiService },
    ViewPortService,
    {
      provide: 'SizeService',
      useFactory: (): ViewPortService => new ViewPortService().determineService(),
      deps: [ViewPortService]
    },
    { provide: API_URL, useValue: isProduction ? 'https://production-api.sample.com' : 'http://dev-api.sample.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
