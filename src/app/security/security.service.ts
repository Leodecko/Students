import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { IAutenticationResponse } from '../interfaces/IAutenticationResponse';
import { ICredentials } from '../interfaces/ICredentials';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly tokenKey = 'token';

  private readonly tokenExpiration = 'token-expiration';

  private readonly fieldRole = 'role';

  private accountsUrl = environment.myAppUrl + environment.accountsApiUrl;

  constructor(private httpClient: HttpClient) { }

  isLogged(): boolean{

    const token = localStorage.getItem(this.tokenKey);

    if(!token) return false;

    const expiration = localStorage.getItem(this.tokenExpiration);
    const expirationDate = new Date(this.tokenExpiration);

    if(expirationDate > new Date()) {
      this.logOut();
      return false;
    }
    return true;
  }

  logOut(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.tokenExpiration);
  }

  obtainFieldJWt(field: string): string{
    const token = localStorage.getItem(this.tokenKey);
    if(!token) return '';
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  getRol(): string{
    return this.obtainFieldJWt(this.fieldRole);
  }

  signUp(credentials: ICredentials): Observable<IAutenticationResponse>{
    return this.httpClient.post<IAutenticationResponse>(this.accountsUrl + 'Create', credentials)
  }

  logIn(credentials: ICredentials): Observable<IAutenticationResponse>{
    return this.httpClient.post<IAutenticationResponse>(this.accountsUrl + 'LogIn', credentials)
  }

  saveToken(autenticationResponse : IAutenticationResponse){
    localStorage.setItem(this.tokenKey, autenticationResponse.token);
    localStorage.setItem(this.tokenExpiration, autenticationResponse.expiration.toString());
  }

  getToken():string{
    
    const token = localStorage.getItem(this.tokenKey);

    return  token ? token : "";
  }
}
