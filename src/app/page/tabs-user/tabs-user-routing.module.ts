import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUserPage } from './tabs-user.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUserPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../../page/home/home.module').then(m => m.HomePageModule)
          },
          {           
                path: 'bookservice',
                loadChildren: () => import('../../page/bookservice/bookservice.module').then(m => m.BookservicePageModule)            
          },
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () => import('../../page/my-order/my-order.module').then(m => m.MyOrderPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../../page/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUserPageRoutingModule {}
