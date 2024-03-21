import { ResponseModel } from './../../shared/interfaces/ResponseModel';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private toastr: ToastrService) { }

  isLoggedIn(): boolean {
    if(localStorage.getItem("isLoggedIn") && localStorage.getItem("userData")) {
      return true;
    }
    return false;
  }

  login({email, password}: any): Observable<any> {
    if(email === "admin@gmail.com" && password === "admin@123") {
      const response: ResponseModel<any> = {
        success: true,
        message: "Login successfully!",
        data: {name: "Admin - HPBank", email: "admin@gmail.com"}
      };

      return of(response).pipe(
        delay(3000),
        tap(() => {
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          localStorage.setItem("userData", JSON.stringify(response.data));
        })
      );
    }
    const response: ResponseModel<any> = {
      success: false,
      message: "Invalid credentials. Login failed!",
      data: null
    };

    return of(response).pipe(
      delay(2000),
      tap(() => this.logout())
    );
  }

  logout(): void {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");

    this.router.navigate(['login']);
    this.toastr.success("Logged out successfully!");
  }
}
