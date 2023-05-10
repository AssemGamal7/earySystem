import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-exam-hsitory',
  templateUrl: './exam-hsitory.component.html',
  styleUrls: ['./exam-hsitory.component.css']
})
export class ExamHsitoryComponent {
  userExam:any;
  userId:any;
  constructor(private api:ApiService,private router:Router ){

  }
ngOnInit(): void {

  this.userId=localStorage.getItem("userId");
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.api.getAll(`users/${this.userId}/exams`).subscribe(data => {
    console.log(JSON.stringify(data));

    this.userExam = data;
  });
}

deleteUserExam(id:any) {
  console.log(id+" id delete");

  if (confirm('Are you sure you want to delete this user?')) {
    this.api.delete(id,`users/${this.userId}/exams`).subscribe(data => {
      // Remove the deleted user from the users array
      this.userExam = this.userExam.filter((user: { id: any; }) => user.id !== id);
    });
  }
}

}
