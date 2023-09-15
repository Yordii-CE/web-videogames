import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game-service/game.service';
import { Game } from 'src/app/types';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css'],
})
export class MostPopularComponent {
  public games: Array<Game> = [];
  constructor(private gameService: GameService) {
    this.games = gameService.getMostPopular();
  }
}
