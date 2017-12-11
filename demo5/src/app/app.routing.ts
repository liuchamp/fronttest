import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo1',
    loadChildren: './demo1/demo1.module#Demo1Module'
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
