import { ExamHsitoryComponent } from './component/exam-hsitory/exam-hsitory.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AdminComponent } from './component/admin/admin.component';
import { UsersComponent } from './component/users/users.component';
import { ExamsComponent } from './component/exams/exams.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { ExamFormComponent } from './component/exam-form/exam-form.component';
import { AudioComponent } from './component/audio/audio.component';
import { NormalComponent } from './component/normal/normal.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'users', component: UsersComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'user-form/:id', component: UserFormComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'exam-form/:id', component: ExamFormComponent },
  { path: 'exam-form', component: ExamFormComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'normal', component: NormalComponent },
  { path: 'history', component: ExamHsitoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
