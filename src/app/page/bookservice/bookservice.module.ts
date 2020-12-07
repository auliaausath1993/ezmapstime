import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookservicePageRoutingModule } from './bookservice-routing.module';
import { Ionic4DatepickerModule } from
  '@logisticinfotech/ionic4-datepicker';
import { BookservicePage } from './bookservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4DatepickerModule,
    BookservicePageRoutingModule
  ],
  declarations: [BookservicePage]
})
export class BookservicePageModule {}
