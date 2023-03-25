import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import Swal from 'sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectComponent } from './components/subject/subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { CardComponent } from './components/card/card.component';
import { AuthorizedComponent } from './security/authorized/authorized.component';
import { LoginComponent } from './security/login/login.component';
import { FormAutenticationComponent } from './security/form-autentication/form-autentication.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { SecurityInterceptorService } from './interceptors/security-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SubjectComponent,
    AddStudentComponent,
    AddSubjectComponent,
    CardComponent,
    AuthorizedComponent,
    LoginComponent,
    FormAutenticationComponent,
    SignUpComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    ReactiveFormsModule,  
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: SecurityInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
