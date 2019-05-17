import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User;
    constructor( private authService: AuthService) {

    }
    ionViewWillEnter() {
        this.authService.user().subscribe(
            user => {
                this.user = user;
            }
        );
    }
}
