import { Component, OnInit } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController,
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'Successfully logged in!',
      position: 'bottom',
      duration: 1000
    });
    toast.present();
  }

  login() {
    this.androidFingerprintAuth.encrypt({
      username: 'user',
      clientId: 'Fingerprint-demo',
      password: 'password',
      userAuthRequired: true,
      disableBackup: true
    }).then(result => {
      this.navCtrl.navigateForward('/home');
      this.showToast();
    }).catch(err => {
      console.log('Err', err);
    })
  }
}
