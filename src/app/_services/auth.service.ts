import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIAUTH = ''
const HTTPOPTIONS ={ headers: new HttpHeaders({'contentType': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor(private http: HttpClient){}

  login(username:string, password:string): Observable<any>{
    return this.http.post(APIAUTH + 'singIn', {
      username, password
    },HTTPOPTIONS);
  }

  register(username: string, email:string, password: string): Observable<any>{
    return this.http.post(APIAUTH + 'signup',{
      username,
      email,
      password
    }, HTTPOPTIONS);
  }


}
