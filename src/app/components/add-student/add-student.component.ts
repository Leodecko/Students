import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAddStudent } from 'src/app/interfaces/IAddStudent';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.sass']
})
export class AddStudentComponent {

  form: FormGroup;
  textPatternName = /^[A-Z][a-z]*$/;
  textPatternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(private formBuilder: FormBuilder,
    private _studentService: StudentService,
    private _router: Router){

      this.form = this.formBuilder.group({
        name: new FormControl('', [
          Validators.required,
          Validators.pattern(this.textPatternName)
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.pattern(this.textPatternName)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(this.textPatternEmail)
        ]),
      });
  }

  addStudent() {
    const student: IAddStudent = {
      name : this.form.value.name,
      lastName : this.form.value.lastName,
      email : this.form.value.email
    }

    this._studentService.AddStudent(student).subscribe(data => {
      Swal.fire(
        'Good job!',
        'You added a Student!',
        'success'
      )
      this._router.navigate(['home']);
    })
  }

  errMesaggeInput(){
    var field = this.form.get('name');
    if  (field?.hasError('required')) return 'This field is required'
      if(field?.hasError('pattern')) return 'Must begin with a capital letter'
        return '';
  }

  errMesaggeEmailInput(){
    var field = this.form.get('email');
    if  (field?.hasError('required')) return 'This field is required'
      if(field?.hasError('pattern')) return 'Is not a valid email'
        return '';
  }

  
}
