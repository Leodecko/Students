import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICredentials } from 'src/app/interfaces/ICredentials';
import { passwordRegex } from 'src/app/utilities';

@Component({
  selector: 'app-form-autentication',
  templateUrl: './form-autentication.component.html',
  styleUrls: ['./form-autentication.component.sass']
})
export class FormAutenticationComponent {
  
  form: FormGroup;
  passRegex : any = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;

  @Input()
  errors: string[] = [];
  @Input()
  action: string;
  @Output()
  onSubmit: EventEmitter<ICredentials> = new EventEmitter<ICredentials>();
  
  

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required]}]
    });
    
  }

  errMesaggeEmailInput(){
    var field = this.form.get('email');
    if  (field?.hasError('required')) return 'Email is required'
      if(field?.hasError('email')) return 'Is not a valid email'
        return '';
  }

  errMesaggePasswordInput(){
    var field = this.form.get('password');
    if  (field?.hasError('required')) return 'Password is required'
      if(field?.hasError('pattern')) return 'The password must contain at least one uppercase letter, one number, and one non-alphanumeric character.'
        return '';
  }
}
