import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo1',
    loadChildren: ''
  },
  {
    path: 'home',
    loadChildren: ''
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
