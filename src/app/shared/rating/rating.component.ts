import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlaceService} from '../../services/place.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() stars: number = 4;
  @Input() placeID: string;
  isRated: boolean = false;
  constructor(private _PlaceService: PlaceService) {
  }
  ngOnInit(): void {
  }
  changeRating(newStars: number) {
    this._PlaceService.addRating(this.placeID, {rate_value: newStars}).subscribe((response) => {
      this.isRated = true;
      setTimeout(() => {
        this.isRated = false;
      }, 3000);
      this.stars = response.place.rates;
    }, () => {
    });
  }
}
