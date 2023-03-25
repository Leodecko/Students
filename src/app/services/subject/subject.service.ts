import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddSubject } from 'src/app/interfaces/IAddSubject';
import { ISkillScore } from 'src/app/interfaces/ISkillScore';
import { ISubject } from 'src/app/interfaces/ISubject';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private scoreBySubjectUrl : string = environment.myAppUrl + environment.subjectApiUrl

  constructor(private httpClient: HttpClient) { }

  getStudentSubjects(studentId:number) : Observable<ISubject[]> {
    return this.httpClient.get<ISubject[]>(`${this.scoreBySubjectUrl}${studentId}`);
  }

  updateStudentSubjectsScore(listScores: ISkillScore[]) : Observable<void>{
    return this.httpClient.put<void>(this.scoreBySubjectUrl, listScores);
  }

  addSubject(subject: IAddSubject) : Observable<IAddSubject>{
    return this.httpClient.post<IAddSubject>(this.scoreBySubjectUrl, subject);
  }

}
