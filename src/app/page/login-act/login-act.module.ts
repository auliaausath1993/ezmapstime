import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginActPageRoutingModule } from './login-act-routing.module';

import { LoginActPage } from './login-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginActPageRoutingModule
  ],
  declarations: [LoginActPage]
})
export class LoginActPageModule {}
