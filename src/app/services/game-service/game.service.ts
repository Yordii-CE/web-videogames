import { Injectable } from '@angular/core';
import { Game } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Array<Game> = [];
  constructor() {
    const game1: Game = {
      title: 'Call Of Duty',
      description:
        'Call of Duty (en español: «La llamada del deber») es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward',
      releaseDate: '01/01/2003',
      image:
        'https://th.bing.com/th/id/OIP.49STXrinKsjom5mY_3CphAHaFX?pid=ImgDet&rs=1',
      rating: 3,
      downloads: 200,
      commingSoon: false,
    };

    const game2: Game = {
      title: 'Minecraft',
      description:
        'Minecraft introdujo millones de niños al mundo digital. Minecraft es un juego de mundo abierto, por lo que no posee un objetivo específico, permitiéndole al jugador una gran libertad en cuanto a la elección de su forma de jugar. A pesar de ello, el juego posee un sistema de logros.',
      releaseDate: '07/10/2025',
      image:
        'https://th.bing.com/th/id/R.1b999a166361203b383a4253b1c3fa1c?rik=j1hNEIDmvv7KsQ&pid=ImgRaw&r=0',
      rating: 5,
      downloads: 800,
      commingSoon: true,
    };
    this.games.push(game1);
    this.games.push(game2);
  }

  create(game: Game) {
    this.games.push(game);
    return true;
  }

  getMostPopular() {
    const popular = this.games.filter((g) => g.rating > 4);
    return popular;
  }

  getMostDownloaded() {
    const downloaded = this.games.filter((g) => g.downloads > 100);
    return downloaded;
  }

  getCommingSoon() {
    const commingSoon = this.games.filter((g) => g.commingSoon);
    return commingSoon;
  }
}
