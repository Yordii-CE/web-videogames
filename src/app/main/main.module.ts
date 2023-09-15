import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SoonComponent } from './soon/soon.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { GameRegisterComponent } from './game-register/game-register.component';
import { CardComponent } from '../components/card/card.component';
import { MenuComponent } from '../components/menu/menu.component';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SoonComponent,
    MostDownloadedComponent,
    MostPopularComponent,
    GameRegisterComponent,
    CardComponent,
    MenuComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, MainRoutingModule, FormsModule],
})
export class MainModule {}
