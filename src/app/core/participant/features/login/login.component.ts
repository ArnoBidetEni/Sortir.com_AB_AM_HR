import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    rememberMe: new FormControl(false)
  });
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    this.loginService.login(this.loginForm.value).subscribe({
      next: () => {
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401)
          this.loginForm.setErrors({ "invalid_credentials": error.message })
      }
    }).add(()=>this.isLoading = false);
  }
}
