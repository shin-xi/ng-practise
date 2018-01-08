import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InitDestroyComponent } from './init-destroy/init-destroy.component';
import { ChangeComponent } from './change/change.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { DoCheckItemComponent } from './do-check-item/do-check-item.component';
import { AfterComponent } from './after/after.component';


@NgModule({
  declarations: [
    AppComponent,
    InitDestroyComponent,
    ChangeComponent,
    DoCheckComponent,
    DoCheckItemComponent,
    AfterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
