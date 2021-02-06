import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { type } from 'os';
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
  @ViewChild('fileInput',{static:false} ) fileInput: ElementRef;
  imageuploaded:any[];
   file=new FormData();
   files:any[]=[];
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
  listOfFiles: any[] = [];
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
        Array,
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
     const filee=this.fileInput.nativeElement.files;
    for (const filo of filee ) {
     // this.imageuploaded.push(filo);
     this.listOfFiles.push(filo);
     
    }

    
      
      
    console.log("jhhhsjsjssj");
    
    console.log(this.listOfFiles);
    
    //this.file.append('images',this.listOfFiles.toString);

    this.file.append('title',this.form.controls.title.value);
    this.file.append('category',this.form.controls.category.value);
    this.file.append('tag',this.form.controls.tag.value);
    this.file.append('description',this.form.controls.description.value);
    this.file.append('phone',this.form.controls.phone.value);
    this.file.append('type',this.form.controls.type.value);
    this.file.append('location',this.form.controls.location.value);
    console.log(this.file);
    for (let index = 0; index < this.fileInput.nativeElement.files.length; index++) {
      this.file.append('images', this.fileInput.nativeElement.files[index]);
  }
    
    // const place: any = {
    //   title: this.form.controls.title.value,
    //   location: this.form.controls.location.value,
    //   category: this.form.controls.category.value,
    //   tag: this.form.controls.tag.value,
    //   description: this.form.controls.description.value,
    //   phone: this.form.controls.phone.value,
    //   type: this.form.controls.type.value,
    //   images: this.files
    // };
    if (!this.isEdit){
      this._placeService.create(this.file).subscribe((response) => {
        console.log(response);
        this.listOfFiles=[];
        if (response.success){
          this.index = 3;
        }
        
      }, ((error) => {
        // this.erro = 'this username or email already exist';
        console.log(error);
      }));
    }else {
      this._placeService.update(this.file, this.placeID).subscribe((response) => {
        this._router.navigateByUrl(`trip/details/${this.placeID}`);
      }, ((error) => {
        // this.erro = 'this username or email already exist';
        console.log(error);
      }));
    }
  }


  // uploadImage(){
   
  //   // this.imageuploaded=this.fileInput.nativeElement.files[0];
  //   // console.log("ya mosheeel!!");
  //   // console.log(this.imageuploaded);
    
    

  //   // console.log("hwaa daaa");
    
  //   // console.log(this.file);
    
  //   // //this.files.push(this.imageuploaded);
   
  //   // //console.log(this.files);
    

  // }
 

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





