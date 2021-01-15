import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  VisitorType = ['Individually', 'Friends', 'Family'];

  constructor() { }

  ngOnInit(): void {
  }

}
