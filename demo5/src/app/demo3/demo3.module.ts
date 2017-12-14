import { Demo3Routes } from './demo3.routing';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo3Component } from './demo3.component';
import { CarComponent } from './component/car.component';
import { CatComponent } from './component/cat.component';
import { DriverComponent } from './component/driver.component';



/**
 * 用于测试http
 */
@NgModule({
  imports: [
    CommonModule,
    Demo3Routes
  ],
declarations : [Demo3Component, CarComponent, CatComponent, DriverComponent]
})
export class Demo3Module { }
