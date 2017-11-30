import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { LogComponent } from './log.component';
import { Test1Routes } from './test1.routing';

@NgModule({
  imports: [
    CommonModule,
    Test1Routes
  ],
  declarations: [Test1Component, LogComponent]
})
export class Test1Module { }
