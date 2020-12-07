import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bookservice',
    loadChildren: () => import('./page/bookservice/bookservice.module').then( m => m.BookservicePageModule)
  },
  {
    path: 'modal-catatan',
    loadChildren: () => import('./page/modal-catatan/modal-catatan.module').then( m => m.ModalCatatanPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./page/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./page/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'verification2',
    loadChildren: () => import('./page/verification2/verification2.module').then( m => m.Verification2PageModule)
  },
  {
    path: 'tabs-user',
    loadChildren: () => import('./page/tabs-user/tabs-user.module').then( m => m.TabsUserPageModule)
  },
  {
    path: 'login-act',
    loadChildren: () => import('./page/login-act/login-act.module').then( m => m.LoginActPageModule)
  },
  {
    path: 'my-order',
    loadChildren: () => import('./page/my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'select-package',
    loadChildren: () => import('./page/select-package/select-package.module').then( m => m.SelectPackagePageModule)
  },
  {
    path: 'order-success',
    loadChildren: () => import('./page/order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'term',
    loadChildren: () => import('./page/term/term.module').then( m => m.TermPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
