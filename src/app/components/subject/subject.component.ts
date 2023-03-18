import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/interfaces/ISkill';
import { FormControl } from '@angular/forms';   
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

  constructor(private _subjectService: SubjectService){

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
