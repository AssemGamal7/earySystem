import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any;
displayedColumns: any;

  constructor(private api: ApiService,private router:Router) { }

  ngOnInit() {
     this.displayedColumns = ['name', 'email', 'password', 'phone', 'status', 'type'];

    this.api.getAll("users").subscribe(data => {
      console.log(JSON.stringify(data));

      this.users = data;
    });
  }

  crateUser(){
    localStorage.setItem("createUser","true");
     this.router.navigate(['user-form']);
  }


  deleteUser(id:any) {
    console.log(id+" id delete");

    if (confirm('Are you sure you want to delete this user?')) {
      this.api.delete(id,"users").subscribe(data => {
        // Remove the deleted user from the users array
        this.users = this.users.filter((user: { id: any; }) => user.id !== id);
      });
    }
  }
}
