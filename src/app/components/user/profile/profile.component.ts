import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  aboutMe = false;
  customForm = true;
  comments = true;
  favoritePlaces = true;
  ngOnInit(): void {
    };
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

