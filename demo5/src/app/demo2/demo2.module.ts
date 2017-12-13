import { MessageService } from './message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from './demo2.component';
import { Demo2Routes } from './demo2.routing';
import { TestsubjectComponent } from './testsubject/testsubject.component';
import { SubscribComponent } from './subscrib/subscrib.component';
import { SubnextComponent } from './subnext/subnext.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Demo2Routes,
    FormsModule
  ],
  declarations: [Demo2Component,
    TestsubjectComponent,
    SubscribComponent,
    SubnextComponent
  ],
  providers: [
    MessageService
  ]

})
export class Demo2Module { }
