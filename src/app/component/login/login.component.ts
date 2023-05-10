import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;
  constructor(private authService: AuthService,private router:Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password);
    this.err= localStorage.getItem("loginError");
  }



  err: any;
 // constructor(private api: ApiService,) {}
  // login() {
  //   let userData = { email: this.email, password: this.password };

  //   this.api.postString(userData, '/users/login' ).subscribe(
  //     (res) => {
  //       console.log(res);
  //       if (res == 'true') {

  //         this.router.navigate(['/profile', this.email]);
  //       } else {
  //         this.err = res;
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
