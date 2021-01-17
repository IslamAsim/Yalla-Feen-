import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  MyStep: number = 1;
  VisitorType: string;
  constructor() { }
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
