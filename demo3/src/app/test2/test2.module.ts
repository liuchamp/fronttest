import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';

import { Test2Routes } from './test2.routing'
@NgModule({
  imports: [
    CommonModule,
    Test2Routes
  ],
  declarations: [Test2Component]
})
export class Test2Module { }
