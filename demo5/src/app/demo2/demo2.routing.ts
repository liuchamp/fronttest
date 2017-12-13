import { Demo2Component } from './demo2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Demo2Component
  },
];

export const Demo2Routes = RouterModule.forChild(routes);
