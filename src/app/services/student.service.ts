import { Injectable } from '@angular/core';
import {Student} from '../interfaces/IStudent'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  dummyStudents: Student[] = [
    {id:1,name:"fulanito"},
    {id:2,name:"sutanito"},
    {id:1,name:"fulanito"},
    {id:2,name:"sutanito"},   
    {id:1,name:"fulanito"},
    {id:2,name:"sutanito"}
  ];

  GetStudents() : Student[] {
    return this.dummyStudents;
  }
}
