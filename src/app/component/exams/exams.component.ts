import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {

  exams :any;
constructor(private api:ApiService,private router :Router){

}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //this.displayedColumns = ['name','status'];

    this.api.getAll("exams").subscribe(data => {
      console.log(JSON.stringify(data));

      this.exams = data;
    });

  }

  crateExam(){
    localStorage.setItem("createExam","true");
     this.router.navigate(['exam-form']);
  }


  deleteExam(id:any) {
    console.log(id+" id delete");

    if (confirm('Are you sure you want to delete this user?')) {
      this.api.delete(id,"exams").subscribe(data => {
        // Remove the deleted user from the users array
        this.exams = this.exams.filter((user: { id: any; }) => user.id !== id);
      });
    }
  }
}
