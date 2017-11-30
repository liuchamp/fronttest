import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { PagenotfindComponent } from './common/pagenotfind.component';
import { AppRoutes } from './app.module';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    PagenotfindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
