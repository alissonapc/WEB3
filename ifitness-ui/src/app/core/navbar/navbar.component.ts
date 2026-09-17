import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  displayingMenu = false;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
