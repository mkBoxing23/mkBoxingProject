import { Component } from '@angular/core';
import { faArrowRight, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  faArrowRight = faArrowRight;

  faExpandArrowsAlt = faExpandArrowsAlt

}
