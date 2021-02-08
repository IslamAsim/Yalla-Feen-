import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { PlaceService } from 'src/app/services/place.service';
import { User } from '../../../models/user';
import { FavoriteService } from '../../../services/favorite.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  form: FormGroup;
  favorites: any = [];
  places: any = [];
  erro: string;
  user: User;
  index = 1;
  loc = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Egypt+madinty';
  constructor(private _api: ApiService, private _placeService: PlaceService, private _favoriteService: FavoriteService) { }
  ngOnInit(): void {
    this._api.getWithToken('/user').subscribe((resp) => {
      this.user = resp.profile;
     // this.loc += this.user.city;
    });
    this._placeService.getUserPlaces().subscribe((res) => {
      this.places = res.data;
      console.log(this.places);
    }, (error) => {
        alert('yallahwyyy');
    });
    this._favoriteService.getUserFavorites().subscribe((res => {
      this.favorites = res.favorites_places;
    }), (error) => {
      alert('yallahwyyy');
    });
  }
  tabChanger(index: number) {
    this.index = index;
  }
  deleteFavorite(id: string){
    this._favoriteService.deletewithToken(id).subscribe((res) => {
      this.ngOnInit();
    }, (error) => {
      alert('yallahwyy couldn\'t delete');
    });
  }
}





