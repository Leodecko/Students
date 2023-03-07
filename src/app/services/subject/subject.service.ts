import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubject } from 'src/app/interfaces/ISubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private myAppUrl : string = 'https://18c8-2806-267-148a-178a-f1fa-c066-62f0-1a50.ngrok.io/'
  //To Do -> We should move this url to a env config file.
  private scoreBySubjectUrl : string = this.myAppUrl + 'ScoreSubject/';

  constructor(private httpClient: HttpClient) { }

  getStudentSubjects(studentId:number) : Observable<ISubject[]> {
    return this.httpClient.get<ISubject[]>(`${this.scoreBySubjectUrl}${studentId}`);
  }

}
