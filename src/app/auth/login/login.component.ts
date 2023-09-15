import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(){
    if(this.email != '' && this.password != ''){

      this.userService.login(this.email, this.password);
    }
  }
}
