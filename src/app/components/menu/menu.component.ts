import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router:Router, private userService : UserService){

  }
  logout(){
    this.userService.destroyLoggedUser()
    this.router.navigate(['/login'])
  }
}
