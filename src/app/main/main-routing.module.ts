import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRegisterComponent } from './game-register/game-register.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { SoonComponent } from './soon/soon.component';

const authRoutes: Routes = [
  {
    path: 'most-downloaded',
    component: MostDownloadedComponent,
  },
  {
    path: 'most-popular',
    component: MostPopularComponent,
  },
  {
    path: 'game-register',
    component: GameRegisterComponent,
  },
  {
    path: 'comming-soon',
    component: SoonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
