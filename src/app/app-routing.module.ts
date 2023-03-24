import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { StudentComponent } from './components/student/student.component';
import { IsAdminGuard } from './security/is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';

const routes: Routes = [
  {path:'home',component:StudentComponent},
  {path:'newStudent',component:AddStudentComponent, canActivate: [IsAdminGuard]},
  {path:'newSubject',component:AddSubjectComponent, canActivate: [IsAdminGuard]},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
