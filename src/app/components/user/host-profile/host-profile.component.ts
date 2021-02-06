import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PlaceService } from 'src/app/services/place.service';
import { User } from '../../../models/user';
import { FavoriteService } from '../../../services/favorite.service';


@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})

export class HostProfileComponent implements OnInit {
  form: FormGroup;
  location = null;
  locations = ['Alexandria', 'Gizeh', 'Port Said', 'Suez', 'Luxor', 'al-Mansura', 'El-Mahalla El-Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Fayyum', 'Zagazig', 'Aswan', 'Damietta', 'Damanhur', 'al-Minya', 'Beni Suef', 'Qena', 'Sohag', 'Hurghada', '6th of October City', 'Shibin El Kom', 'Banha', 'Kafr el-Sheikh', 'Arish', '10th of Ramadan City', 'Bilbais', 'Marsa Matruh', 'Idfu'];
  category = null;
  categories = ['workspace', 'cafe', 'Coffee & Restaurants', 'cat4', 'cat5'];
  tag = null;
  tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];
  favorites: any = [];
  places: any = [];
  erro: string;
  user: User;
  index = 1;
  isEdit: boolean = false;
  placeID: string;
  loc = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Egypt+madinty';
  constructor(private _api: ApiService, private _placeService: PlaceService, private _formBuilder: FormBuilder, private _router: Router, private _favoriteService: FavoriteService) { }
  ngOnInit(): void {
    this._api.getWithToken('/user').subscribe((resp) => {
      // @ts-ignore
      this.user = resp.profile;
     // this.loc += this.user.city;
    });

    this._placeService.getUserPlaces().subscribe((res) => {
      this.places = res.places;
    }, (error) => {
        alert('yallahwyyy');
    });
    this.form = this._formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
        ],
      ],
      location: [
        '',
      ],
      category: [
        '',
      ],
      tag: [
        '',
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
        ],
      ],
      type: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
        ],
      ],
      image: [
        '',
        [
          Validators.required,
        ],
      ],
    });
  }
  tabChanger(index: number) {
    this.index = index;
  }
  deletePlace(id: string){
    this._placeService.delete(id).subscribe((res) => {
      console.log(res);
    }, (error) => {
      alert('yallahwyy couldn\'t delete');
    });

  }


  deleteFavorite(id: string){

    this._favoriteService.deletewithToken(id).subscribe((res) => {
      console.log(res);
    }, (error) => {
      alert('yallahwyy couldn\'t delete');
    });

  }

  OnSubmit() {
    const place: any = {
      title: this.form.controls.title.value,
      location: this.form.controls.location.value,
      category: this.form.controls.category.value,
      tag: this.form.controls.tag.value,
      description: this.form.controls.description.value,
      phone: this.form.controls.phone.value,
      type: this.form.controls.type.value,
      images: this.form.controls.image.value
    };
    if (!this.isEdit){
      this._placeService.create(place).subscribe((response) => {
      }, ((error) => {
        // this.erro = 'this username or email already exist';
        console.log(error);
      }));
    }else {
      this._placeService.update(place, this.placeID).subscribe((response) => {
        this._router.navigateByUrl(`trip/details/${this.placeID}`);
      }, ((error) => {
        // this.erro = 'this username or email already exist';
        console.log(error);
      }));
    }
  }

  editPlace(place: any){
    this.index = 2;
    this.isEdit = true;
    this.placeID = place._id;
    this.form.patchValue({
      title: place.title ,
      description: place.description,
      phone: place.phone,
      type: place.type,
      location: place.location,
    });
  }
}





