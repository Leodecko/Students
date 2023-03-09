import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/interfaces/ISkill'

@Injectable({
  providedIn: 'root'
})
export class StudentScoreService {
   
  constructor(private httpClient : HttpClient ) { }

  getStudentScores(studentId:number) : Observable<ISkill[]> {

    return this.httpClient.get<ISkill[]>(`${environment.myAppUrl}${environment.scoreStudentApiUrl}${studentId}`);

  }
}
