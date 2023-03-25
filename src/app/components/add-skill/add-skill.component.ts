import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAddSkill } from 'src/app/interfaces/IAddSkill';
import { IAddSubject } from 'src/app/interfaces/IAddSubject';
import { ISkill } from 'src/app/interfaces/ISkill';
import { ISubject } from 'src/app/interfaces/ISubject';
import { SkillService } from 'src/app/services/skill.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.sass']
})
export class AddSkillComponent {
  
  stepperOrientation: Observable<any>;
  secondFormGroup: FormGroup;
  textPattern = /^[A-Z][a-z]*$/;
  subjects: ISubject[];
  subject: ISubject;
  selectedSubjectId: number;

  constructor(private _formBuilder: FormBuilder, 
    breakpointObserver: BreakpointObserver,
    private subjectService: SubjectService, 
    private skillService: SkillService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: new FormControl('', [
          Validators.required,
          Validators.pattern(this.textPattern)
        ])
      });

  }


  ngOnInit(){
    this.getSubject()
  }

  onChange() {
    console.log(this.selectedSubjectId); // muestra el valor seleccionado en la consola
  }

  getSubject(){
    this.subjectService.GetSubjects().subscribe(data =>{
        this.subjects = data;
        console.log()
    },
    err => console.log(err) );
  }
  
  onSubjectSelect(subjectId: number): void {
    this.selectedSubjectId = subjectId;
    console.log(this.selectedSubjectId)
  }

  createSkill(){
    const newSkill: IAddSkill = {
      name: this.secondFormGroup.value.secondCtrl
    };

    try {
      const subjectId = this.selectedSubjectId;
      this.skillService.createSkill(subjectId, newSkill).toPromise();
      console.log('La habilidad se ha creado correctamente');
    } catch (error) {
      console.error('Ha ocurrido un error al crear la habilidad', error);
    }
  }

  errMesaggeSkillNameInput(){
    var field = this.secondFormGroup.get('secondCtrl');
    if  (field?.hasError('required')) return 'Skill name is required'
      if(field?.hasError('pattern')) return 'Must begin with a capital letter'
        return '';
  }
}
