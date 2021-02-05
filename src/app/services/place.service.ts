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
  update(place: Place)
  {
   return this._apiService.PUT('place', place);
  }
  get()
  {
   return this._apiService.get('place');
  }
  getWithToken()
  {
   return this._apiService.getWithToken('place');
  }
  getDetails(id: string)
  {
   return this._apiService.get(`place/details/${id}`);
  }
  delete(id: string)
  {
   return this._apiService.delete(`place/delete/${id}`);
  }

  addComment(place_id:any,comment:any){
    return this._apiService.postWithToken(`place/create-comment/${place_id}`,comment);
  }

  
}
