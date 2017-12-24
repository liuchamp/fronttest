import { WorkspaceRoutes } from './workspace.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutes
  ],
  declarations: [WorkspaceComponent]
})
export class WorkspaceModule { }
