import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  //posting user data to backend  from signUp page
  addUser(form):Observable<any>
  {
    return this.hc.post<any>('/user/signup',form);
  }

  //login user
  doLogin(form):Observable<any>
  {
    return this.hc.post<any>('/user/login',form);
  }
}
