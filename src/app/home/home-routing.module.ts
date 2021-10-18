import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'Facebook',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/facebook/facebook.module').then( m => m.FacebookPageModule)
          }
        ]
      },
      {
        path:'messages',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
          }
        ]
      },
      {
      path:'about',
      children:[
        {
          path:'',
          loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
        }
      ]
    },
    {
      path:'signup',
      children:[
        {
          path:'',
          loadChildren: () => import('../pages/signup/signup.module').then(m => m.SignupPageModule)
        }
      ]
    },
      {
        path:'',
      redirectTo: 'Facebook',
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
