import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConstApi } from './const-api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authApi = ConstApi.apiURL + 'user/';

  constructor(private http: HttpClient, private router: Router) {}

  // Start: Login
  login(loginData: any) {
    return this.http.post(this.authApi + 'login', loginData);
  } //end login

  //START: LOGOUT
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('UTid');
    localStorage.removeItem('EduCompId');
    localStorage.removeItem('EduCompList');
    this.router.navigateByUrl('/Registration/Login');
  }

  // Chick: Iflogin
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
