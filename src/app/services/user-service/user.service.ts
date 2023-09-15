import { Injectable, booleanAttribute } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Array<User> = [];

  constructor() {}

  // Implementa el método para registrar un usuario.
  register(user: User): void {
    this.users.push(user);
  }

  // Implementa el método para iniciar sesión.
  login(username: string, password: string): boolean {
    let exists: boolean = false;

    const user = this.users.find(
      (el) => el.email == username && el.password == password
    );

    if (user) return true;
    return false;
  }
}
