import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading:boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private toastr: ToastrService) {

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  // get f() { return this.loginForm.controls; }

  loginFormHandler(): void {
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) {
        return;
    }
    // console.log(this.loginForm.value);
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.router.navigate(['/']);
          this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      },
      (err) => {
        // console.log("Error--here: ", err);
        this.isLoading = false;
        if(err?.error?.message) {
          this.toastr.error(err?.error?.message);
        } else {
          this.toastr.error(err.message);
        }
      }
    );
  }
}
