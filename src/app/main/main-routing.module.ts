import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRegisterComponent } from './game-register/game-register.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { SoonComponent } from './soon/soon.component';
import { authGuard } from '../auth.guard';

const authRoutes: Routes = [
  {
    path: 'most-downloaded',
    component: MostDownloadedComponent,
    canActivate: [authGuard],
  },
  {
    path: 'most-popular',
    component: MostPopularComponent,
    canActivate: [authGuard],
  },
  {
    path: 'game-register',
    component: GameRegisterComponent,
    canActivate: [authGuard],
  },
  {
    path: 'comming-soon',
    component: SoonComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
