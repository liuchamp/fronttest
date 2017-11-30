import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfindComponent } from './common/pagenotfind.component'

const routes: Routes = [

  {
    path: 'test2',
    loadChildren: './test2/test2.module#Test2Module'
  },
  {
    path: '',
    redirectTo: 'test2',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfindComponent
  }
];


export const AppRoutes = RouterModule.forRoot(routes ,{
  enableTracing: true, // <-- debugging purposes only
  preloadingStrategy: PreloadAllModules
});
