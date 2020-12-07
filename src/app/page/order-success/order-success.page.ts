import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class OrderSuccessPage implements OnInit {

  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  order(){
    this.navCtrl.navigateRoot('/tabs-user/order')
  }

}
