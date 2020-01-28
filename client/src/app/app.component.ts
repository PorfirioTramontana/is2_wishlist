import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FbService } from './services/fb.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wishlist';

  constructor(
    private router: Router,
    private authenticationService: FbService

  ) {
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

}
