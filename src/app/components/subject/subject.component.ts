import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/interfaces/ISkill';
import { FormControl } from '@angular/forms';   

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent {

  @Input() subjectName: string = "";

  @Input() skills: ISkill[] = [];

  valorSlider = new FormControl(50);

  editMode:boolean = false;
  
  changeToEditMode(){
    this.editMode = true;
  }

  saveChanges(){
    this.editMode = false;

    var body = this.skills.map(skill => {skill.id,skill.score});

    console.log(body);
  }

  // formatLabel(value: number): string {
  //   if (value >= 1) {
  //     return Math.round(value / 1000) + 'k';
  //   }

  //   return `${value}`;
  // }

  
}
