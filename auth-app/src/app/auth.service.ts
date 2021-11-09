import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerURL = "http://localhost:3000/register"
  private _loginURL = "http://localhost:3000/login"
  constructor(private http : HttpClient) { }
  
  registerUser(user :  any){
    return this.http.post<any>(this._registerURL,user)
  }

  loginUser(user:any){
    return this.http.post<any>(this._loginURL,user)
  }


}
