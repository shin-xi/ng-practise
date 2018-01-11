import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrafficComponent } from './component/traffic/traffic.component';
import { Trans2statesComponent } from './component/trans2states/trans2states.component';


@NgModule({
  declarations: [
    AppComponent,
    TrafficComponent,
    Trans2statesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
