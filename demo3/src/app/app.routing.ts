import { Routes, RouterModule } from '@angular/router';
import { PagenotfindComponent } from './common/pagenotfind.component'

const routes: Routes = [
  {
    path: '**',
    component:PagenotfindComponent
  }
];

export const AppRoutes = RouterModule.forChild(routes);
