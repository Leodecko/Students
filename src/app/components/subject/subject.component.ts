import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent {

  @Input() score: number = 0;
  @Input() name: string = "";

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  skillsSpanishSubject: any[] = [{name:'Lectura en voz alta'},{name:'Comprension lectora'}, {name:'Legibilidad'}, {name: 'Coherencia'}];
  skillsMathSubject: any[] = [{name:'Suma'},{name:'Resta'}, {name:'Multiplicación'}, {name: 'División'}];
}
