import { Component } from '@angular/core';
import { faStar as starFill } from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  star = star;
  starFill = starFill;

  title: string = '';
  description: string = '';
  releaseDate: string = '';
  image: string = '';
  rating: number = 0;
  dowloads: number = 0;
  comingSoon: boolean = false;
}
