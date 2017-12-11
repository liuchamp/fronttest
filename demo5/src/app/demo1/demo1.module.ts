import { Demo1Routes } from './demo1.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1.component';

@NgModule({
  imports: [
    CommonModule,
    Demo1Routes
  ],
  declarations: [Demo1Component]
})
export class Demo1Module { }