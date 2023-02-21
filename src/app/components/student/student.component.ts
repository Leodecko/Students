import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/IStudent';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit  { 

  constructor(public _StudentService:StudentService) { }

  public dataSource: Student[] = [];

  displayedColumns: string[] = ['id', 'name'];

  ngOnInit() {
      this.dataSource = this._StudentService.GetStudents();
  } 
}
