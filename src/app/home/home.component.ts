import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../account/auth-service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    protected authenticationService: AuthenticationService,
    protected router: Router
  ) {}

  logout() {
    this.authenticationService.logout().subscribe(
      (res) => this.router.navigate(['/login']),
      (erreur) => console.error(erreur)
    );
  }
}
