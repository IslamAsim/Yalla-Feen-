import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCustom = false;
  IsNavOpen = false;
  IsSearchOpen = true;
  // tslint:disable-next-line:typedef
  componentAdded(e: any){
    e.isCustom ? this.isCustom = true : this.isCustom = false ;
  }
  constructor() {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  OpenNav() {
    this.IsNavOpen = !this.IsNavOpen;
  }

  // tslint:disable-next-line:typedef
  StartSearch(e: any) {
    this.IsSearchOpen = !this.IsSearchOpen;
    setTimeout(() => {
      e.focus();
    }, 300);
  }
  loseFocusNav(){
    setTimeout(() => {
      this.IsSearchOpen = true;
    }, 300);
  }

}
