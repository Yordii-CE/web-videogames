import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game-service/game.service';
import { Game } from 'src/app/types';

@Component({
  selector: 'app-most-downloaded',
  templateUrl: './most-downloaded.component.html',
  styleUrls: ['./most-downloaded.component.css'],
})
export class MostDownloadedComponent {
  public games: Array<Game> = [];
  constructor(private gameService: GameService) {
    this.games = gameService.getMostDownloaded();
  }
}
