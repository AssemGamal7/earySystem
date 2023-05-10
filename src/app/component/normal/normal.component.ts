import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent {

constructor(private router:Router){

}


  takeExam(){
    //this.router.navigate(['/']);
  }

  examHistory(){
    this.router.navigate(['/history']);
  }

  profile(){
   let email= localStorage.getItem("userEmail")
    this.router.navigate(['/profile', email]);
  }
}
