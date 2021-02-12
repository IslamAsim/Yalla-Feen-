import {Component, OnInit} from '@angular/core';
import {Place} from '../../../models/place';
import {PlaceService} from '../../../services/place.service';
import { FavoriteService } from '../../../services/favorite.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  places: Place[] = [];
  isFavorite: boolean[] = [];
  isLogged: boolean;
  constructor(private _placeService: PlaceService, private _favoriteService: FavoriteService, private _Auth: AuthenticationService) {
  }
  
  ngOnInit(): void {
    this._Auth.status.subscribe(e => this.isLogged = e);
    this._placeService.get().subscribe((response: any) => {
      this.places = response.data;
      if (this.isLogged){
        for (const place of this.places){
          this._favoriteService.isFav(place._id).subscribe(() => {
            this.isFavorite.push(true);
          }, () => {
            this.isFavorite.push(false);
          });
        }
      }
    } , error => {
      console.log(error);
    });
  }
}
