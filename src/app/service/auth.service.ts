import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private api:ApiService,private router:Router) { }

  login(email: string, password: string) {
    // Authenticate user here
      let userData = { email: email, password: password };

    this.api.postString(userData, '/users/login' ).subscribe(
      (res) => {
        console.log(res);
        const myArray = res.split(" ");
console.log(myArray); // Output: ["Hello", "world"]


        if (myArray[0] == 'true' && myArray[1]=="normal") {
          this.isLoggedIn = true;
          localStorage.setItem('userEmail', userData.email);
          localStorage.setItem('userId', myArray[2]);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.removeItem('loginError');
          localStorage.setItem('userType', "normal");
          this.router.navigate(['/normal']);
        } else  if (myArray[0] == 'true' && myArray[1]=="admin") {
          this.isLoggedIn = true;
          localStorage.setItem('userEmail', userData.email);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userType', "admin");
          localStorage.setItem('userId', myArray[2]);
          localStorage.removeItem('loginError');
          this.router.navigate(['/admin']);
        }
        else {
         localStorage.setItem("loginError",res);
        }
      },
      (err) => {
        console.log(err);
      }
    );

  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIN() {
    return this.isLoggedIn;
  }
}
