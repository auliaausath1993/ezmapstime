import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verification2Page } from './verification2.page';

const routes: Routes = [
  {
    path: '',
    component: Verification2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verification2PageRoutingModule {}
