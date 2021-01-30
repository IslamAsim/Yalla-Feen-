import {Component, OnInit} from '@angular/core';
import {Place} from '../../../models/place';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  places: Place[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:label-position
    const place: Place = new Place();
    place.title = 'Pyramids';
    place.id = 'p17017';
    place.img = 'assets/images/n.jpg';
    place.description = 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
    place.rating = 2;
    place.workingHours = '5pm to 8am';
    for (let i = 0; i < 15; i++) {
      // @ts-ignore
      this.places.push(place);
    }
  }
}
