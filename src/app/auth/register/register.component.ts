import { Component } from '@angular/core';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private name : string = '';
  private email : string = '';
  private password :string = '';
  private confirm_password : string = '';
}
