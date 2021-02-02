import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})
export class HostProfileComponent implements OnInit {
  information = false;
  customForm = true;
  comments = true;
  hostPlaces = true;
  ngOnInit(): void {
    };
    showInformation(){
      this.information = !this.information;
      this.customForm = true;
      this.comments = true;
      this.hostPlaces = true;
    return this.information;
    }
    showComments(){
      this.comments = !this.comments;
      this.information = true;
      this.customForm = true;
      this.hostPlaces = true;
    return this.comments;
    }
    showHostPlaces(){
      this.hostPlaces = !this.hostPlaces;
      this.information = true;
      this.customForm = true;
      this.comments = true;
    return this.hostPlaces;
    }
  }

