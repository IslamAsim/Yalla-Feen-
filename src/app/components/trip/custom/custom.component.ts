import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  constructor() {
  }
  MyStep: number = 1;
  VisitorType: string;
  CategorySelected: string;
  types = ['solo', 'friends', 'couple', 'family'];
  categories = ['Cafe & Restaurants', 'Cinemas & Theater', 'Historical Places', 'Gardens & Clubs', 'Co-working Space', 'Shopping', 'Entertainment Places', 'Events'];
  Tags = ['Restaurants', 'Shopping Center', 'Historical Places', 'Entertainment', 'Cinemas & Theater', 'Workspace', 'Gardens'];
  cities = ['Cairo', 'Alexandria', 'Gizeh', 'Port Said', 'Suez', 'Luxor', 'al-Mansura', 'El-Mahalla El-Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Fayyum', 'Zagazig', 'Aswan', 'Damietta', 'Damanhur', 'al-Minya', 'Beni Suef', 'Qena', 'Sohag', 'Hurghada', '6th of October City', 'Shibin El Kom', 'Banha', 'Kafr el-Sheikh', 'Arish', '10th of Ramadan City', 'Bilbais', 'Marsa Matruh' , 'Idfu'];
  timeArray = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
  isFromAM: boolean = false;
  isToAM: boolean = false;
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
      case 0:  this.CategorySelected = ''; break;
      case 1:  this.CategorySelected = 'Cafe & Restaurants'; break;
      case 2:  this.CategorySelected = 'Cinemas & Theater'; break;
      case 3:  this.CategorySelected = 'Historical Places'; break;
      case 4:  this.CategorySelected = 'Gardens & Clubs'; break;
      case 5:  this.CategorySelected = 'Co-working Space'; break;
      case 6:  this.CategorySelected = 'Shopping'; break;
      case 7:  this.CategorySelected = 'Entertainment Places'; break;
      case 8:  this.CategorySelected = 'Events'; break;
    }
    console.log(this.CategorySelected);
  }
  // tslint:disable-next-line:typedef
  StepChanger(status: string){
    switch (status) {
      case 'back': this.MyStep --; break;
      case 'next': this.MyStep ++; break;
    }
  }
  // tslint:disable-next-line:typedef
  AMorPM(timing: string){
    timing === 'from' ? this.isFromAM = !this.isFromAM : this.isToAM = !this.isToAM;
  }
}
