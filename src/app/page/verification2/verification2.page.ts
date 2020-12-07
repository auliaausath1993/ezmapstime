import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verification2',
  templateUrl: './verification2.page.html',
  styleUrls: ['./verification2.page.scss'],
})
export class Verification2Page implements OnInit {

  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.goDashboard()
    }, 3000);
  }

  goDashboard(){
    this.navCtrl.navigateRoot('tabs-user')
  }

}
