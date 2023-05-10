import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
constructor(private router:Router){

}

  users(){
    this.router.navigate(['/users']);
  }

  exams(){
    this.router.navigate(['/exams']);
  }

  profile(){
   let email= localStorage.getItem("userEmail")
   console.log(email);

    this.router.navigate(['/profile', email]);
  }
}
