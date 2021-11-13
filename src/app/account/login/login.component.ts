import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    protected authenticationService: AuthenticationService,
    protected router: Router
  ) {}

  ngOnInit(): void {}
  handleLogin(): void {
    this.authenticationService
      .login(this.email, this.password)
      .subscribe(
        (result) => {
          console.log(result);
          console.log(result.headers.get('Connection'));
          console.log(result.headers.get('Cache-Control'));
          console.log(result.headers.get('Set-Cookie'));
          

            console.log(result.headers.keys());
          this.loginSuccess = true;
          this.successMessage = 'Login Successful.';
          this.router.navigate(['/home']);
        },
        () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        }
      );
  }
}
