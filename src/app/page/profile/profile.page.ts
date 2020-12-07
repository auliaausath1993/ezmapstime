import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private alertCtrl : AlertController,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

async logout(){  
  let alert = await this.alertCtrl.create({
    header: 'Info',
    message: 'Anda yakin ingin keluar ?',
    buttons: [{
      text: 'Tidak',
      role : 'none',
      handler: () => {

      }
    },
    {
      text: 'Ya',
      handler: () => {
        this.navCtrl.navigateRoot(['login'])

      }
    }
    ]
  })
  alert.present()
  }

  term(){
    this.navCtrl.navigateForward('term')
  }

}
