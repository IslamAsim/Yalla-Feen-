import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  IsNavOpen: boolean = false;
  IsSearchOpen: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  OpenNav() {
    this.IsNavOpen = !this.IsNavOpen;
  }

  // tslint:disable-next-line:typedef
  StartSearch() {
    this.IsSearchOpen = !this.IsSearchOpen;
    console.log(this.IsSearchOpen);
  }
}
