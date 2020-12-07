import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.page.html',
  styleUrls: ['./select-package.page.scss'],
})
export class SelectPackagePage implements OnInit {
  package_list : any = [
    {
    price : '120.000',
    luas : '30-45',
    durasi : '2'
    },
    {
    price : '180.000',
    luas : '50-75',
    durasi : '2'
    },
    {
    price : '240.000',
    luas : '75-100',
    durasi : '2'
    },
    {
    price : '300.000',
    luas : '105-125',
    durasi : '2'
    },
    {
    price : '360.000',
    luas : '130-150',
    durasi : '2'
    },
]
item : any
  constructor(
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }
  select(item){
    this.item = item
    console.log(this.item);
    this.modalCtrl.dismiss(this.item)
    
  }

  back(){
    this.modalCtrl.dismiss()
  }

}
