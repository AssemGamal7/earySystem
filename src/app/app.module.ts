import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AdminComponent } from './component/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'; //MatIconModule
import { MatIconModule } from '@angular/material/icon';
 import { ExamsComponent } from './component/exams/exams.component';
 import { UsersComponent, } from "./component/users/users.component";
 import { MatTableModule, } from "@angular/material/table";
import { UserFormComponent } from './component/user-form/user-form.component'; //MatTableModule
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExamFormComponent } from './component/exam-form/exam-form.component';
import { AudioComponent } from './component/audio/audio.component';
import { NormalComponent } from './component/normal/normal.component';
import { ExamHsitoryComponent } from './component/exam-hsitory/exam-hsitory.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent,
    AdminComponent,
     ExamsComponent,
     UsersComponent,
     UserFormComponent,
     ExamFormComponent,
     AudioComponent,
     NormalComponent,
     ExamHsitoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,MatTabsModule,
    MatIconModule ,MatTableModule,MatOptionModule,ReactiveFormsModule,MatRadioModule,MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
