import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent
  },
];

export const WorkspaceRoutes = RouterModule.forChild(routes);
