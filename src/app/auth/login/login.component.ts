import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  login() {
    if (this.email != '' && this.password != '') {
      const response = this.userService.login(this.email, this.password);
      if (response) {
        this.router.navigate(['most-popular']);
      } else {
        alert('Usuario desconocido.');
      }
    }
  }
}
