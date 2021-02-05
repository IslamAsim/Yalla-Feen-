import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FavoriteService } from './../../services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean = false;
  @Output() change = new EventEmitter<boolean>();
  constructor(private _favoriteService:FavoriteService) { }

  ngOnInit(): void {
  }
  changeFavorite(place_id:string)
  {
    this.isFavorite = !this.isFavorite;
   // this.isFavorite? this._favoriteService.add_favorite(place_id):this._favoriteService.deletewithToken(place_id);
  
    this.change.emit(this.isFavorite);
  }

 
    
}
