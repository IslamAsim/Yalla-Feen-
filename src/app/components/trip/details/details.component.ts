import { Component, OnInit } from '@angular/core';
import {Place} from '../../../models/place';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  place: Place = new Place();
  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.place.id = params.get('id');
    });
    this.place.title = 'Pyramids';
    this.place.contact = '01066346693';
    this.place.location = 'london second floor';
    this.place.feedBacks = [{user: 'ayman', feedback: 'yasta gmden gedan'}, {user: 'salah', feedback: 'nice place'},
      {user: 'Samy', feedback: 'nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place nice place  nice place '}];
    this.place.img = 'assets/images/n.jpg';
    this.place.description = 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
    this.place.rating = 2;
    this.place.workingHours = '5pm to 8am';
  }
}
