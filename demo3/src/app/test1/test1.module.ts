import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { LogComponent } from './log.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Test1Component, LogComponent]
})
export class Test1Module { }
