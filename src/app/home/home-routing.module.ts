import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'Google',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/google/google.module').then( m => m.GooglePageModule)
          }
        ]
      },
      {
        path:'Facebook',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/facebook/facebook.module').then(m => m.FacebookPageModule)
          }
        ]
      },
      {
        path:'Twitter',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/twitter/twitter.module').then(m => m.TwitterPageModule)
          }
        ]
      },
      {
        path:'',
      redirectTo: 'Google',
      pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
