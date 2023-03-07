import { Component, Input } from '@angular/core';
import { ISKill } from 'src/app/interfaces/ISubject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent {

  @Input() subjectName: string = "";

  //@Input() skills: ISKill[] = [];

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  
}
