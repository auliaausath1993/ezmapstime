import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verification2PageRoutingModule } from './verification2-routing.module';

import { Verification2Page } from './verification2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verification2PageRoutingModule
  ],
  declarations: [Verification2Page]
})
export class Verification2PageModule {}
