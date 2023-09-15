import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  constructor(userService: UserService) {}
}
