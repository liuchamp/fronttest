import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from './demo2.component';
import { Demo2Routes } from './demo2.routing';
import { TestsubjectComponent } from './testsubject/testsubject.component';
import { SubscribComponent } from './subscrib/subscrib.component';
import { SubnextComponent } from './subnext/subnext.component';

@NgModule({
  imports: [
    CommonModule,
    Demo2Routes
  ],
  declarations: [Demo2Component,
    TestsubjectComponent,
    SubscribComponent,
    SubnextComponent
]
})
export class Demo2Module { }
