import { Injectable, booleanAttribute } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRead, UserCreate } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Array<UserCreate> = [];
  private loggedUser : UserCreate | undefined;
  constructor() {
    //Guardando usuario por defecto
    const user: UserCreate = {
      name: 'atenea',
      email: 'atenea@gmail.com',
      password: '12345',
      confirmPassword: '12345',
    };
    this.users.push(user);
  }

  // Implementa el método para registrar un usuario.
  register(user: UserCreate): boolean {
    this.users.push(user);
    return true;
  }

  // Implementa el método para iniciar sesión.
  login(username: string, password: string): boolean {
    const user = this.users.find(
      (el) => el.email == username && el.password == password
    );

    if (user){
      this.setLoggedUser(user)
      return true;
    }
    return false;
  }

  setLoggedUser(user :UserCreate ){
    this.loggedUser = user
  }
  getLoggedUser(){    
    return this.loggedUser;
  }
  destroyLoggedUser(){
    this.loggedUser = undefined
  }
}
