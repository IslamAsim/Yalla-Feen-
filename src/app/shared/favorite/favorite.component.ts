import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Input() placeID: string;

  // @Output() change = new EventEmitter<boolean>();
  constructor(private _favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
  }
  deleteFavorite(placeID){
    this._favoriteService.deletewithToken(placeID).subscribe((res) => {
      console.log(res);
      this.isFavorite = false;
    });
  }
  addFavorite(placeID){
    this._favoriteService.addFavorite(placeID).subscribe((res) => {
      this.isFavorite = true;
      console.log(res);
    });
  }
}
