import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddSubject } from 'src/app/interfaces/IAddSubject';
import { SubjectService } from 'src/app/services/subject/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.sass']
})
export class AddSubjectComponent {

  step = 0;
  textSubject: string;
  textSkills: string[] = [];
  currentTextSkill: string = '';
  isEmpty: boolean = true;
  textPattern = /^[A-Z][a-z]*$/;
  private _studentService: any;
  
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(this.textPattern)
    ])
  });


  constructor(private subjectService: SubjectService){

  
  }

  verifyIsEmpty() {
    this.isEmpty = this.textSubject.length === 0;
  }

  addSkill() {
    this.textSkills.push(this.currentTextSkill);
    this.currentTextSkill = '';
  }

  addSubject(){
    const subject : IAddSubject = {
      name : this.textSubject
    }
    this.subjectService.addSubject(subject).subscribe(data => {
      console.log(data);
      Swal.fire(
        'Good job!',
        'You added a Subject!',
        'success'
      )
    })

  }

  errMesaggeSubjectNameInput(){
    var field = this.form.get('name');
    if  (field?.hasError('required')) return 'Subject name is required'
      if(field?.hasError('pattern')) return 'The subject name must begin with a capital letter'
        return '';
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
