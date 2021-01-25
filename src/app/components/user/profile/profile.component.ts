import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  MyStep: number = 1;
  VisitorType: string;
  Category: string;
  Tags = ['Restaurants', 'Shopping Center', 'Historical Places', 'Entertainment', 'Cinemas & Theater', 'Workspace', 'Gardens'];
  cities = ['Cairo', 'Alexandria', 'Gizeh', 'Port Said', 'Suez', 'Luxor', 'al-Mansura', 'El-Mahalla El-Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Fayyum', 'Zagazig', 'Aswan', 'Damietta', 'Damanhur', 'al-Minya', 'Beni Suef', 'Qena', 'Sohag', 'Hurghada', '6th of October City', 'Shibin El Kom', 'Banha', 'Kafr el-Sheikh', 'Arish', '10th of Ramadan City', 'Bilbais', 'Marsa Matruh' , 'Idfu'];
  constructor() {
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:variable-name typedef
  VisitorTypeSelection(index: number){
    switch (index) {
      case 1:  this.VisitorType = 'solo'; break;
      case 2:  this.VisitorType = 'friends'; break;
      case 3:  this.VisitorType = 'couple'; break;
      case 4:  this.VisitorType = 'family'; break;
    }
  }
  // @ts-ignore
  CategorySelection(index: number): string {
    switch (index) {
      case 0:  this.Category = ''; break;
      case 1:  this.Category = 'Cafe & Restaurants'; break;
      case 2:  this.Category = 'Cinemas & Theater'; break;
      case 3:  this.Category = 'Historical Places'; break;
      case 4:  this.Category = 'Gardens & Clubs'; break;
      case 5:  this.Category = 'Co-working Space'; break;
      case 6:  this.Category = 'Shopping'; break;
      case 7:  this.Category = 'Entertainment Places'; break;
      case 8:  this.Category = 'Events'; break;
    }
    console.log(this.Category);
  }
  // tslint:disable-next-line:typedef
  StepChanger(status: string){
    switch (status) {
      case 'back': this.MyStep --; break;
      case 'next': this.MyStep ++; break;
    }
  }
}
