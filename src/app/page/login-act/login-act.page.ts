import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-act',
  templateUrl: './login-act.page.html',
  styleUrls: ['./login-act.page.scss'],
})
export class LoginActPage implements OnInit {

  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  next(){
    this.navCtrl.navigateRoot('verification2')
  }

}
