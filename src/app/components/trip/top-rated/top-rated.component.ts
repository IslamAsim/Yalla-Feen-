import {Component, OnInit} from '@angular/core';
import {Place} from '../../../models/place';
import {PlaceService} from '../../../services/place.service';
import { FavoriteService } from './../../../services/favorite.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  places: Place[] = [];
  isFav: boolean;
  constructor(private _placeService: PlaceService,private _favoriteService:FavoriteService) {
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
