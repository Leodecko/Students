import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Student} from '../interfaces/IStudent'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private myAppUrl : string = 'https://18c8-2806-267-148a-178a-f1fa-c066-62f0-1a50.ngrok.io/'

   private studentUrl : string = this.myAppUrl + 'Student';
  
  constructor(private httpClient: HttpClient) { }

  // getStudent(): Observable<Student[]>{
  //   return this.http.get<Student[]>(`${this.myAppUrl}${this.myApiUrl}`)
  // }
  // dummyStudents: Student[] = [
  //   {id:1,name:"fulanito"},
  //   {id:2,name:"sutanito"},
  //   {id:1,name:"fulanito"},
  //   {id:2,name:"sutanito"},   
  //   {id:1,name:"fulanito"},
  //   {id:2,name:"sutanito"}
  // ];

  GetStudents() : Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.studentUrl);
  }
}
