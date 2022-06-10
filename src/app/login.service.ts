import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login/login';
import { Session } from './login/session';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  newSessionUrl = 'https://scrumpokerlogin-development.up.railway.app/newSession';

  constructor(private http: HttpClient) { }

  generateNewSession(loginInfo: Login): Observable<Session>{
    return this.http.post<Session>(this.newSessionUrl, loginInfo, httpOptions);
  }
}
