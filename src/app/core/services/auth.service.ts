import { IResponseModel } from './../../shared/interfaces/IResponseModel';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_URL } from '../../app-base-url';
import { ILoginModel } from '../Interfaces/ILoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  isLoggedIn(): boolean {
    if(localStorage.getItem("myToken") && localStorage.getItem("userData")) {
      return true;
    }
    return false;
  }

  setUser(userData: any): void {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  setToken(token: string): void {
    localStorage.setItem("myToken", token);
  }

  getToken(): any {
    return localStorage.getItem("myToken");
  }

  login({username, password}: ILoginModel): Observable<IResponseModel<any>> {
    return this.http.post<IResponseModel<any>>(`${APP_BASE_URL}/auth/login`, {username, password});
  }

  logout(): void {
    localStorage.removeItem("myToken");
    localStorage.removeItem("userData");

    this.router.navigate(['login']);
    this.toastr.success("Logged out successfully!");
  }
}
