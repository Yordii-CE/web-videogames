import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user-service/user.service';

export const authGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router)
 if(userService.getLoggedUser()) {
  return true
 }else{
  router.navigate(['/login'])
  return false
 }
  
};
