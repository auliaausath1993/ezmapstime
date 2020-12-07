import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  login(){
    this.navCtrl.navigateForward('login-act')
  }

  register(){
    this.navCtrl.navigateForward('register')
  }

  term(){
    this.navCtrl.navigateForward('term')
  }

}
