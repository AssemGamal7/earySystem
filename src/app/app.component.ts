import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'earysystem';

  constructor(public authService: AuthService, private router: Router) {}

  logoutt() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
