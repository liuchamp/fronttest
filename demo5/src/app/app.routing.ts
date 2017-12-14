import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo1',
    loadChildren: './demo1/demo1.module#Demo1Module'
  },
  {
    path: 'demo2',
    loadChildren: './demo2/demo2.module#Demo2Module'
  },
  {
    path: 'demo3',
    loadChildren : './demo3/demo3.module#Demo3Module'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
