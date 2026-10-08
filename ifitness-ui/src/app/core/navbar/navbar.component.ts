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

  logout() {
    this.auth.logout()
      .catch(error => console.error('Erro ao encerrar a sessão na API', error))
      .then(() => this.router.navigate(['/login']));
  }

}
