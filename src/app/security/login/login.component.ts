import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICredentials } from 'src/app/interfaces/ICredentials';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {

  constructor(private securityService: SecurityService,
    private router: Router){

  }

  ngOnInit(){
    this.securityService.logOut();
  }

  login(credentials: ICredentials){
    this.securityService.logIn(credentials).subscribe(response=> {
      this.securityService.saveToken(response);
      this.router.navigate(['home'])
    })

  }

}
