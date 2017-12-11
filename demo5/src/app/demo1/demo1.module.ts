import { Demo1Routes } from './demo1.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1.component';
import { Counter } from './counter';
import { Wrapper } from './wrapper';
@NgModule({
  imports: [
    CommonModule,
    Demo1Routes
  ],
  declarations: [Demo1Component, Wrapper, Counter]
})
export class Demo1Module { }

/**
 *  这个模块用于测试使用ng-content的使用，需要结合Angular 2 ContentChild & ContentChildren看起使用原理。
 *  https://segmentfault.com/a/1190000008707828
 *  https://segmentfault.com/a/1190000010730597
 */