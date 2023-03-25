import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ICredentials } from 'src/app/interfaces/ICredentials';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {

  errorMessage: string = '';

  constructor(private securityService: SecurityService,
    private router: Router,
    private httpClient: HttpClient){

  }

  ngOnInit(){
    
  }

  login(credentials: ICredentials){
    this.securityService.logIn(credentials).subscribe(response=> {
    this.securityService.saveToken(response);
    this.router.navigate(['home'])
    })
  }

}
