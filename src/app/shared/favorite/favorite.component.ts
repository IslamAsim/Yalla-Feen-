import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean = false;
  @Input() placeID: string;
  // @Output() change = new EventEmitter<boolean>();
  constructor(private _favoriteService: FavoriteService ,private placeService:PlaceService ){
  }
  ngOnInit(): void {
  }
  changeFavorite(placeID: string) {
   console.log(localStorage.getItem("token"));
   
    this.isFavorite ? this.placeService.addFavorite(placeID).subscribe((res) => {
      console.log(res); }) : this._favoriteService.deletewithToken(placeID).subscribe((res) => {
      console.log(res); });

      this.isFavorite = !this.isFavorite;
  }
}
