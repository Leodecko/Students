import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { IAddSkill } from '../interfaces/IAddSkill';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ISkill } from '../interfaces/ISkill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private hhtpClient: HttpClient) { }

  private skillAddUrl = `${environment.myAppUrl} ${environment.skillApiUrl}`

  createSkill(subjectId: number, skill: IAddSkill): Observable<void> {
    const url = `${this.skillAddUrl}${subjectId}`;

    return this.hhtpClient.post<void>(url, skill).pipe(
      catchError(error => {
        console.error('Ha ocurrido un error al crear la habilidad', error);
        throw error;
      })
    );
  }
}
