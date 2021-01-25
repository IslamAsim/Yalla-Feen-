import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  MyStep: number = 1;
  VisitorType: string;
  PlaceCategory = ['Restaurants', 'Shopping Center', 'Historical Places', 'Entertainment', 'Cinemas & Theater', 'Workspace', 'Gardens'];
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
  StepChanger(status: string){
    switch (status) {
      case 'back': this.MyStep --; break;
      case 'next': this.MyStep ++; break;
    }
  }
}
