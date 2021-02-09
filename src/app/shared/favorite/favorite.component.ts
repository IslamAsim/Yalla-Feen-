import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Input() placeID: string;

  // @Output() change = new EventEmitter<boolean>();
  isLogged: boolean;
  constructor(private _favoriteService: FavoriteService, private _authentication: AuthenticationService, private _router: Router) {
  }

  ngOnInit(): void {
    this._authentication.status.subscribe(e => this.isLogged = e);
  }

  deleteFavorite(placeID) {
    if (!this.isLogged) {
      this._router.navigateByUrl('user/login');
    }
    this._favoriteService.deletewithToken(placeID).subscribe((res) => {
      console.log(res);
      this.isFavorite = false;
    });
  }

  addFavorite(placeID) {
    if (!this.isLogged) {
      this._router.navigateByUrl('user/login');
    }
    this._favoriteService.addFavorite(placeID).subscribe((res) => {
      this.isFavorite = true;
      console.log(res);
    });
  }
}
