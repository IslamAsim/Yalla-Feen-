import {Component, OnInit} from '@angular/core';
import {Place} from '../../../models/place';
import {PlaceService} from '../../../services/place.service';
import { FavoriteService } from '../../../services/favorite.service';
import {AuthenticationService} from '../../../services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  places: Place[] = [];
  isFavorite: boolean[] = [];
  isLogged: boolean;
  notEmptyPost = true;
  notscrolly = true;
  isLoaded = false;
  constructor(
    private spinner: NgxSpinnerService,
    private _placeService: PlaceService,
    private _favoriteService: FavoriteService,
    private _Auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.isLoaded = true;
    this._Auth.status.subscribe(e => this.isLogged = e);
    this._placeService.get().subscribe((response: any) => {
      this.places = response.data;
      this.isLoaded = false;
      if (this.isLogged){
        for (const place of this.places){
          this._favoriteService.isFav(place._id).subscribe(() => {
            this.isFavorite.push(true);
          }, () => {
            this.isFavorite.push(false);
          });
        }
      }
    } , error => {
      console.log(error);
    });
  }
  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.spinner.show();
      this.notscrolly = false;
      this.loadNextPost();
    }
  }
// load th next 6 posts
  loadNextPost() {
    // return last post from the array
    const lastPost = this.places[this.places.length - 1];
    // get id of last post
    const lastPostId = lastPost._id;
    // sent this id as key value pare using formdata()
    const dataToSend = new FormData();
    dataToSend.append('_id', lastPostId);
    // call http request
    this._placeService.get()
      .subscribe( (data: any) => {
        const newPost = data.data[0];
        this.spinner.hide();
        if (newPost.length === 0 ) {
          this.notEmptyPost =  false;
        }
        // add newly fetched posts to the existing post
        this.places = this.places.concat(newPost);
        this.notscrolly = true;
      });
  }
}
