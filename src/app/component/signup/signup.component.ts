import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: any;
  password: any;
  name: any;
  err:any;
  constructor(private api: ApiService,private router:Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let body = {
      id: 2,
      name: 'assem',
      email: 'assem@gmail.com',
      password: '123456',
      phone: '01010101',
    };
    this.api.getAll('users').subscribe(
      (res) => {
        console.log(res[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    // Call your API to create a new user account with email and password
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);

    let body = {
      email: this.email,
      password: this.password,
      name: this.name,
      status: 'inactive',
      type: 'normal',
    };
    this.api.post(body, '/users').subscribe(
      (res) => {
        console.log(res);
        console.log(res.email);

        if(res.email == "Email already exist, please login")
        {
          console.log("gwaaaaaaaaa");

          this.err=res.email;
        }else{
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        this.err="Email already exist, please login";
        console.log(this.err);
      }
    );
  }
}
