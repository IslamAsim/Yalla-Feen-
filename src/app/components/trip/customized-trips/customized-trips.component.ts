import { Component, OnInit } from '@angular/core';
import {Place} from '../../../models/place';

@Component({
  selector: 'app-customized-trips',
  templateUrl: './customized-trips.component.html',
  styleUrls: ['./customized-trips.component.scss']
})
export class CustomizedTripsComponent implements OnInit {
  trips: Place[] = [];

  constructor() {
  }

  ngOnInit(): void {

    // tslint:disable-next-line:label-position
    const trip: Place = new Place();
    trip.title = 'Pyramids';
    trip._id = 'p12';
    trip.placeImages = ['assets/images/pyramids.jpg'];
    trip.description = 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
    trip.rating = 2;
    trip.workingHours = '5pm to 8am';
    for (let i = 0; i < 15; i++) {
      // @ts-ignore
      this.trips.push(trip);
    }
  }
}
