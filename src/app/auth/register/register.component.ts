import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { UserCreate } from 'src/app/types';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) {}
  register() {
    const user: UserCreate = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };
    const response = this.userService.register(user);
    if (response) {
      alert('Usuario creado, ya puedes iniciar sesion.');
      this.router.navigate(['login']);
    }
  }
}
