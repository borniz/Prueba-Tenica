import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  template: `
    <h2>Registro</h2>
    <form (submit)="register()">
      <label>Nombre:</label>
      <input type="text" [(ngModel)]="name" name="name" required>
      
      <label>Email:</label>
      <input type="email" [(ngModel)]="email" name="email" required>
      
      <label>Contraseña:</label>
      <input type="password" [(ngModel)]="password" name="password" required>

      <button type="submit">Registrarse</button>
    </form>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      response => console.log('Registro exitoso:', response),
      error => console.error('Error en el registro:', error)
    );
  }
}
