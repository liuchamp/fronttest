import { WorkspaceRoutes } from './workspace.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutes,
    HttpClientModule
  ],
  declarations: [WorkspaceComponent]
})
export class WorkspaceModule { }
