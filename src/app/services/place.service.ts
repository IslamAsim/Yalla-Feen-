import { Injectable } from '@angular/core';
import { Place } from '../models/place';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(private _apiService: ApiService) { }
  create(place: Place)
  {
   return this._apiService.postWithToken('place/create', place);
  }
  update(place: Place, id: string)
  {
   return this._apiService.putWithToken(`place/update/${id}`, place);
  }
  get()
  {
   return this._apiService.get('place');
  }
  getUserPlaces()
  {
   return this._apiService.getWithToken('place/my-places');
  }
  getDetails(id: string)
  {
   return this._apiService.get(`place/details/${id}`);
  }
  delete(id: string)
  {
   return this._apiService.deleteWithToken(`place/delete/${id}`);
  }


  addComment(place_id:any,comment:any){
    return this._apiService.postWithToken(`place/create-comment/${place_id}`,comment);
  }



}
