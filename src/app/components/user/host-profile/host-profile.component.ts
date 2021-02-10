import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PlaceService } from 'src/app/services/place.service';
import { User } from '../../../models/user';
import { FavoriteService } from '../../../services/favorite.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})

export class HostProfileComponent implements OnInit {
  @ViewChild('fileInput', {static: false} ) fileInput: ElementRef;
  imageuploaded: any[];
   file = new FormData();
   selectedFile: File
   filo = new FormData();
   files: any [] = [];
  form: FormGroup;
  editForm:FormGroup;
  location = null;
  locations = ['Alexandria', 'Gizeh', 'Port Said', 'Suez', 'Luxor', 'al-Mansura', 'El-Mahalla El-Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Fayyum', 'Zagazig', 'Aswan', 'Damietta', 'Damanhur', 'al-Minya', 'Beni Suef', 'Qena', 'Sohag', 'Hurghada', '6th of October City', 'Shibin El Kom', 'Banha', 'Kafr el-Sheikh', 'Arish', '10th of Ramadan City', 'Bilbais', 'Marsa Matruh', 'Idfu'];
  category = null;
  categories: string[];
  tag = null;
  tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];
  favorites: any = [];
  places: any = [];
  erro: string;
  cito = null;

  user: User;
  index = 1;
  isEdit: boolean = false;
  placeID: string;
  listOfFiles: any[] = [];
  cities = ['Alexandria', 'Gizeh', 'Port Said', 'Suez', 'Luxor', 'al-Mansura', 'El-Mahalla El-Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Fayyum', 'Zagazig', 'Aswan', 'Damietta', 'Damanhur', 'al-Minya', 'Beni Suef', 'Qena', 'Sohag', 'Hurghada', '6th of October City', 'Shibin El Kom', 'Banha', 'Kafr el-Sheikh', 'Arish', '10th of Ramadan City', 'Bilbais', 'Marsa Matruh' , 'Idfu'];
  iseditable:boolean=false;

  loc = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Egypt+madinty';

  constructor( private _authentication:AuthenticationService,private _api: ApiService, private _placeService: PlaceService, private _formBuilder: FormBuilder, private _router: Router, private _favoriteService: FavoriteService) { }
  ngOnInit(): void {
    this._api.getWithToken('/user').subscribe((resp) => {
      // @ts-ignore
      this.user = resp.profile;
      console.log(this.user);
      
     // this.loc += this.user.city;
      this._api.get('category/list').subscribe((res) => {
        this.categories = res.data;
      });
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
  

    this.editForm = this._formBuilder.group({
     
      cito: [
        '',
      ],
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ,
          Validators.minLength(5),
        ],
      ],
      
    });

    this._api.getWithToken('/user').subscribe((resp) => {
      this.user = resp.profile;
     // this.loc += this.user.city;
     console.log(this.user);
     console.log(this.user.city);
     
     
    });
    this.editForm.disable();

  }
  tabChanger(index: number) {
    this.index = index;
  }
  deletePlace(id: string){
    this._placeService.delete(id).subscribe((res) => {
      this.ngOnInit();
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
     const filee = this.fileInput.nativeElement.files;
     for (const filo of filee ) {
     // this.imageuploaded.push(filo);
     this.listOfFiles.push(filo);
    }
     this.file.append('title', this.form.controls.title.value);
     this.file.append('category', this.form.controls.category.value);
     this.file.append('tag', this.form.controls.tag.value);
     this.file.append('description', this.form.controls.description.value);
     this.file.append('phone', this.form.controls.phone.value);
     this.file.append('type', this.form.controls.type.value);
     console.log(this.file);
    // tslint:disable-next-line:prefer-for-of
     for (let index = 0; index < this.fileInput.nativeElement.files.length; index++) {
      this.file.append('images', this.fileInput.nativeElement.files[index]);
  }
    const place: any = {
      title: this.form.controls.title.value,
      category: this.form.controls.category.value,
      tag: this.form.controls.tag.value,
      description: this.form.controls.description.value,
      phone: this.form.controls.phone.value,
      type: this.form.controls.type.value,
      images: this.files
    };
     if (!this.isEdit){
      this._placeService.create(this.file).subscribe((response) => {
        console.log(response);
        this.listOfFiles = [];
        if (response.success){
          this.ngOnInit();
          this.index = 3;
        }
      }, ((error) => {
        // this.erro = 'this username or email already exist';
        console.log(error);
      }));
    }else {
      this._placeService.update(this.file, this.placeID).subscribe((response) => {
        console.log(response);
        this._router.navigateByUrl(`trip/details/${this.placeID}`);
      }, ((error) => {
        // this.erro = 'this username or email already exist';
        console.log("yallahwyyyy");
        
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



  OnEdit(){
  
    this.editForm.enable();
    console.log("im here");
    

    const user = {
     
      firstname: this.editForm.controls.firstname.value,
      lastname: this.editForm.controls.lastname.value,
      city: this.editForm.controls.cito.value,
      email: this.editForm.controls.Email.value,
     
    };
    console.log(user);
    setTimeout(() => 
    this._authentication.editProfile(user).subscribe((response) => {
      console.log("loooooool");
      
      console.log(response);
      
      
    }, ((e) => {
      
      alert("yallahwyyy" );
    })), 4000);
  }


  changeProfilePhoto(event:any){

    this.selectedFile = event.target.files[0];
   

   
  }

  onUpload() {
    console.log("uploaaad");
    
  console.log(this.selectedFile);
  console.log(this.filo);
  
  
    this.filo.append('avatar', this.selectedFile);
    this._authentication.change_Profilepicture(this.filo).subscribe((res)=>{
      console.log("responseeeeeeeee");
      console.log(res);
      
    },(e)=>{
      alert("yallahwyyy");
      console.log(e);
      
    })
  }
}





