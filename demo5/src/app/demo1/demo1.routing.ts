import { Counter } from './counter';
import { Demo1Component } from './demo1.component';
import { Routes, RouterModule } from '@angular/router';
import { Wrapper } from './wrapper';

const routes: Routes = [
  {
    path:'',
    component: Demo1Component
  },
];

export const Demo1Routes = RouterModule.forChild(routes);
