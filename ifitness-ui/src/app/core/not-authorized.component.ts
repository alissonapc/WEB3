import { Component } from '@angular/core';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1 class="text-center">Acesso negado!</h1>
    </div>
  `
})
export class NotAuthorizedComponent {

}
