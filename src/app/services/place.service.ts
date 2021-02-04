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
  getDetails(id: string)
  {
   return this._apiService.get(`place/${id}`);
  }
  delete(id: string)
  {
   return this._apiService.delete(`place/${id}`);
  }
}
