import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean = false;
  @Input() placeID: string;
  // @Output() change = new EventEmitter<boolean>();
  constructor(private _favoriteService: FavoriteService) {
  }
  ngOnInit(): void {
  }
  changeFavorite(placeID: string) {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this._favoriteService.add_favorite(placeID).subscribe((res) => {
      console.log(res); }) : this._favoriteService.deletewithToken(placeID).subscribe((res) => {
      console.log(res); });
  }
}
