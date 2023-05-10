import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
export interface User {

  name: string;
  email: string;
  password: string;
  phone:string;
  status: string;
  type:string
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})



export class UserFormComponent {
  user!: User;
selectedStatus:any=false;
selectedType:any=false;

  constructor(private fb: FormBuilder,private api: ApiService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
this.user= {

  name: "",
  email: "",
  password: "",
  phone:"",
  status: "",
  type:""
}
;
    let id=this.route.snapshot.paramMap.get('id');
    this.api.getById(id,'users').subscribe(
      (res) => {
        console.log(res);
        this.user=res;
        console.log(this.user.type);
        console.log(this.user['status']);
       if(this.user['status']=="active"){
        this.selectedStatus=true;
       }
       if(this.user['type']=="admin"){
        this.selectedType=true;
       }

      },
      (err) => {
        console.log(err);
      }
    );
  }



save(){
  console.log('Email: ' +JSON.stringify( this.user));

console.log("this.selectedStatus "+this.selectedStatus+" this.selectedType  "+this.selectedType);


  if(this.selectedStatus==true){
    this.user['status']="active"
  }else{
    this.user['status']="inactive"
  }

  if(this.selectedType==true){
    this.user['type']="admin"
  }else{
    this.user['type']="normal"
  }




  console.log(JSON.stringify(this.user)+" hwaa daa");

  this.api.post(this.user, '/users').subscribe(
    (res) => {
      console.log(res);
      this.router.navigate(['/users']);
    },
    (err) => {
      console.log(err);
    }
  );
  }}
