import {Component, OnInit} from '@angular/core';
import {Trip} from '../../../models/trip';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  trips: Trip[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:label-position
    const trip: Trip = new Trip();
    trip.title = 'Pyramids';
    trip.img = 'assets/images/pyramids.jpg';
    trip.description = 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
    trip.rating = 2;
    trip.workingHours = '5pm to 8am';
    for (let i = 0; i < 15; i++) {
      // @ts-ignore
      this.trips.push(trip);
    }
  }
}
