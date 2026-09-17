import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  msg: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login(user: string, password: string) {
    this.auth.login(user, password)
      .then(() => {
        this.router.navigate(['/activities']);
      })
      .catch(() => {
        this.msg = 'Usuário e/ou senha inválida!';
      });
  }

}