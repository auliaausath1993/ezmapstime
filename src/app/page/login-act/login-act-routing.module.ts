import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginActPage } from './login-act.page';

const routes: Routes = [
  {
    path: '',
    component: LoginActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginActPageRoutingModule {}
