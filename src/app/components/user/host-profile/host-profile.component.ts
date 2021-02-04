import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PlaceService } from 'src/app/services/place.service';
import { User } from './../../../models/user';

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
  categories = ['workspace','cafe','cat3','cat4','cat5']

  tag = null;
  tags = ['tag1','tag2','tag3','tag4','tag5']

  
  erro: string;
  user:User;
  index: number = 1;
  loc: string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Egypt+madinty";

  constructor(private _api: ApiService, private _formBuilder: FormBuilder, private _place: PlaceService, private _router: Router) { }
  ngOnInit(): void {
    this._api.getWithToken('/user').subscribe((resp) => {
      console.log(resp);
      // @ts-ignore
      this.user = resp.profile;
     // this.loc += this.user.city;
      console.log(this.user);
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

    });
  };

  tabChanger(index: number) {
    this.index = index;
  }




  OnSubmit() {
    
    const place={
      title:this.form.controls.title,
      location:this.form.controls.location,
      category:this.form.controls.category,
      tag:this.form.controls.tag,
      description:this.form.controls.description,
      phone:this.form.controls.phone,
      type:this.form.controls.type,
      


    }
    
    this._place.create(place).subscribe((response) => {
      console.log(response ," hhhhhhhhhhhhhhhhhhhhhhh");
      
    }, ((error) => {
      // this.erro = 'this username or email already exist';
     console.log(error);
    }));
  }
}





