import { Component, Input } from '@angular/core';
import { ICredentials } from 'src/app/interfaces/ICredentials';
// import { toParseErrorsApi } from 'src/app/utilities';
import { SecurityService } from '../security.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {

  
  constructor(private securityService: SecurityService,
    private router: Router){

  }

  signUpUser(credenciales: ICredentials){
    this.securityService.signUp(credenciales).subscribe(resp => {
      Swal.fire(
        'Success!',
        'You have successfully sign up!',
        'success'
      )
      this.router.navigate(['login']);
    },
  )}
}
