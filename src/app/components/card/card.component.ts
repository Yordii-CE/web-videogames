import { Component, Input } from '@angular/core';
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

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() releaseDate: string = '';
  @Input() image: string = '';
  @Input() rating: number = 0;
  @Input() dowloads: number = 0;
  @Input() comingSoon: boolean = false;
}
