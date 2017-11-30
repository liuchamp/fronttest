import { Routes, RouterModule } from '@angular/router';
import { Test2Component } from './test2.component';

const routes: Routes = [
  {
    path: '',
    component: Test2Component
  }
];

export const Test2Routes = RouterModule.forChild(routes);
