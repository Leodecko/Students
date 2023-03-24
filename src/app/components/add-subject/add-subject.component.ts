import { Component } from '@angular/core';

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


  constructor(){

  }

  verifyIsEmpty() {
    this.isEmpty = this.textSubject.length === 0;
  }

  addSkill() {
    this.textSkills.push(this.currentTextSkill);
    this.currentTextSkill = '';
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
