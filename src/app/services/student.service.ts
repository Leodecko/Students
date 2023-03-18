import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/enviroments/environment';
import {Student} from '../interfaces/IStudent'
import {IAddStudent} from '../interfaces/IAddStudent'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private studentUrl : string = environment.myAppUrl + environment.studentApiUrl;
  
  constructor(private httpClient: HttpClient) { }

  GetStudents() : Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.studentUrl);
  }

  AddStudent(student: IAddStudent) : Observable<IAddStudent> {
    return this.httpClient.post<IAddStudent>(this.studentUrl, student);
  } 

  DeleteStudent(studentId: number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.studentUrl}${studentId}`)
  }
}
