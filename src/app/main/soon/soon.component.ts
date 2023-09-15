import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game-service/game.service';
import { Game } from 'src/app/types';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css'],
})
export class SoonComponent {
  public games: Array<Game> = [];
  constructor(private gameService: GameService) {
    this.games = gameService.getCommingSoon();
  }
}
