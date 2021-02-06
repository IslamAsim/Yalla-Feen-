import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import {PlaceService} from '../../services/place.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  // ratingValues = [1, 2, 3, 4, 5];
  @Input() stars: number = 4;
  @Input() placeID: string;
  // @Output() change = new EventEmitter<number>();

  constructor(private _PlaceService: PlaceService) { }

  ngOnInit(): void {
  }
  changeRating(newStars: number)
  {
    this._PlaceService.addRating(this.placeID, newStars).subscribe( (response) => {
      console.log(response);
      this.stars = response.place.rates;
    });
    // this.stars = newStars;
    // this.change.emit(newStars);
    // Call API and Send new rating
  }
}
