import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCustom = false;
  IsNavOpen = false;
  IsSearchOpen = true;
  isLogged: boolean;
  subscription: Subscription;
  // tslint:disable-next-line:typedef
  componentAdded(e: any){
    e.isCustom ? this.isCustom = true : this.isCustom = false ;
  }
  constructor( private _authentication: AuthenticationService) {
  }
  ngOnInit(): void {
    this.subscription = this._authentication.status.subscribe(e => this.isLogged = e);
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
  // tslint:disable-next-line:typedef
  loseFocusNav(){
    setTimeout(() => {
      this.IsSearchOpen = true;
    }, 300);
  }

}
