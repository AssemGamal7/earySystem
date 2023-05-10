import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
user:any;

constructor(private api:ApiService,private route: ActivatedRoute,private router:Router){

}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  let email=this.route.snapshot.paramMap.get('email');
  this.api.getById(email,'users/byEmail').subscribe(
    (res) => {
      console.log(res);
      this.user=res;
    },
    (err) => {
      console.log(err);
    }
  );
}

save(){
  console.log('Email: ' +JSON.stringify( this.user));


  // let body = {
  //   email: this.email,
  //   password: this.password,
  //   name: this.name,
  //   status: 'inactive',
  //   type: 'normal',
  // };
  this.api.post(this.user, '/users').subscribe(
    (res) => {
      console.log(res);

      let type=localStorage.getItem("userType")
      if(type=="admin"){
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/normal']);
      }
    },
    (err) => {
      console.log(err);
    }
  );
}


}
