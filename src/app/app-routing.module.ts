import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const authRoutes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(authRoutes), AuthModule, MainModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
