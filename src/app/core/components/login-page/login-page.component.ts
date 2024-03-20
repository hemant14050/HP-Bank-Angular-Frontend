import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private authService: AuthService) {

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
        if(data.success) {
          this.router.navigate(['/']);
        } else {
          window.alert(data.message);
        }
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        window.alert(err.message);
      }
    );
  }
}
