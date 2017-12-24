import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
