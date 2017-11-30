import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1.component';
import { } from ''
import { LogComponent } from './log.component';
const routes: Routes = [
  {
    path: 'test1',
    component: Test1Component,
    children: [
      {
        path: '',
        children:[
          {
            path: 'log',
            component: LogComponent
          }
        ]
      }

    ]
  },
];

export const Test1Routes = RouterModule.forChild(routes);
