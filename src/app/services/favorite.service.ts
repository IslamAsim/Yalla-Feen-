import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private _apiService:ApiService) { }
  add_favorite(place_id: string)
  {
    console.log("place_ID : ",place_id);
    
   return this._apiService.postWithTokenFav( `favorite/add/${place_id}` );
  }
  getUserFavorites()
  {
   return this._apiService.getWithToken('favorite/list');
  }
  deletewithToken(place_id: string)
  {
   return this._apiService.deleteWithToken(`favorite/remove/${place_id}`);
  }

}
