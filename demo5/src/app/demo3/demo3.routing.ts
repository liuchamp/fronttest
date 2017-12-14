import { Routes, RouterModule } from '@angular/router';
import { Demo3Component } from './demo3.component';

const routes: Routes = [
  {
    path: '',
    component: Demo3Component
  }
];

export const Demo3Routes = RouterModule.forChild(routes);
