import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
      {
          title: 'Bienvenue',
          url: '/home',
          icon: 'planet'
      },

      {
          title: 'Tableau de bord',
          url: '/dashboard',
          icon: 'speedometer'
      },

    {
      title: 'Les cartes',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
        // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
        //this.splashScreen.hide();
        this.authService.getToken();
    });
  }


    // When Logout Button is pressed
    logout() {
        this.authService.logout().subscribe(
            data => {
                this.alertService.presentToast(data['message']);
            },
            error => {
                console.log(error);
            },
            () => {
                this.navCtrl.navigateRoot('/landing');
            }
        );
    }
}
