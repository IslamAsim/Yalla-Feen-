import {Component, OnInit} from '@angular/core';
import {Place} from '../../../models/place';
import {PlaceService} from '../../../services/place.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  places: Place[] = [];

  constructor(private _placeService: PlaceService) {
  }
  ngOnInit(): void {
    this._placeService.get().subscribe((response: any) => {
      console.log(response.data);
      this.places = response.data;
    } , error => {
      console.log(error);
    });
  }
}
