import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentScoreService {
   
  constructor(private httpClient : HttpClient ) { }
  url:string = "https://localhost:7160/";
  getStudentScores(studentId:number) : any{
    const endpoint = this.url + 'ScoreSubject/'+studentId;
    return this.httpClient.get(endpoint);
  }
}
