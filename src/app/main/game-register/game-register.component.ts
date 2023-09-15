import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game-service/game.service';
import { Game } from 'src/app/types';

@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.css'],
})
export class GameRegisterComponent {
  public title: string = '';
  public description: string = '';
  public releaseDate: string = '';
  public image: string = '';
  public rating: number = 0;
  public downloads: number = 0;
  public commingSoon: boolean = true;

  constructor(private gameService: GameService) {}
  create() {
    if (
      this.title != '' &&
      this.description != '' &&
      this.releaseDate != '' &&
      this.image != ''
    ) {
      const game: Game = {
        title: this.title,
        description: this.description,
        releaseDate: this.releaseDate,
        image: this.image,
        rating: this.rating,
        downloads: this.downloads,
        commingSoon: this.commingSoon,
      };

      const response = this.gameService.create(game);
      if (response) alert('Juego registrado correctamente');
    } else {
      alert('Rellenar todos los campos.');
    }
  }
}
