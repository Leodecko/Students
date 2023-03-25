import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/interfaces/ISkill';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';   
import { SubjectService } from 'src/app/services/subject/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent {

  @Input() subjectName: string = "";

  @Input() skills: ISkill[] = [];

  editMode:boolean = false;

  form: FormGroup;

  textPatternScore = /^([0-9]|[1-9]\d|100)$/;

  constructor(private _subjectService: SubjectService,
    private formBuilder: FormBuilder){

    this.form = this.formBuilder.group({
      score: new FormControl('', [
        Validators.pattern(this.textPatternScore)
      ]),
    });
  }

  errMesaggeScore(){
    var field = this.form.get('score');
    if(field?.hasError('pattern')) return 'The score must be from 0 to 100'
        return '';
  }

  changeToEditMode(){
    this.editMode = true;
  }

  saveChanges(){
    this.editMode = false;

    var body = this.skills.map(skill => {
      return {id: skill.id, score: skill.score};
    });

    Swal.fire(
      'Good job!',
      'The student has been updated!',
      'success'
    )

    this._subjectService.updateStudentSubjectsScore(body).subscribe(() => {

    })
  }  
}
