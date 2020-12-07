import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  countdown : any
  timer : any = 59
  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
    this.timeCount()
  }

  timeCount(){
    let count = setInterval(() => {
      this.timer--
      // console.log('interfal',this.timer)
      if (this.timer == 0) {
        console.log('stop countdown')
        clearInterval(count)
      }
    }, 1000);
    count
  }

  resendOTP(){
    this.timer = 60
    this.timeCount()
  }

  next(){
    this.navCtrl.navigateForward('verification2')
  }

}
