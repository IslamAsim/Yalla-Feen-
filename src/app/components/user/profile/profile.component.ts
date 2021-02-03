import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private _api: ApiService) {
    // this.http = httpClient;
  }
  aboutMe = false;
  customForm = true;
  comments = true;
  favoritePlaces = true;
  user: {};
  ngOnInit(): void {
    this._api.getWithToken('/user').subscribe((resp ) => {
      console.log(resp);
      // @ts-ignore
      this.user = resp.profile;
      console.log(this.user);
    });
    }
    showAboutMe(){
      this.aboutMe = !this.aboutMe;
      this.customForm = true;
      this.comments = true;
      this.favoritePlaces = true;
    return this.aboutMe;
    }
    showCustomForm(){
      this.customForm = !this.customForm;
      this.aboutMe = true;
      this.comments = true;
      this.favoritePlaces = true;
    return this.customForm;
    }
    showComments(){
      this.comments = !this.comments;
      this.aboutMe = true;
      this.customForm = true;
      this.favoritePlaces = true;
    return this.comments;
    }
    showFavoritePlaces(){
      this.favoritePlaces = !this.favoritePlaces;
      this.aboutMe = true;
      this.customForm = true;
      this.comments = true;
    return this.favoritePlaces;
    }
  }

