import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { PagenotfindComponent } from './common/pagenotfind.component';
import { AppRoutes } from './app.routing';
import { Test1Module } from './test1/test1.module';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    PagenotfindComponent
  ],
  imports: [
    BrowserModule,
    Test1Module,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
