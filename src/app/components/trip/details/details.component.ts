import {Component, OnInit} from '@angular/core';
import {Place} from '../../../models/place';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../../../services/place.service';
import {CommentService} from '../../../services/comment.service';
import {Comment} from '../../../models/comment';
import {ApiService} from '../../../services/api.service';
import {FavoriteService} from '../../../services/favorite.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  place: Place = new Place();
  id: any;
  addedComment: string = '';
  isEditEnable: boolean = false;
  ido: string;
  isFavorite: boolean;
  isLogged: boolean;
  relatedPlaces:any;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _authentication: AuthenticationService, private _favoriteService: FavoriteService, private _api: ApiService, private _activatedRoute: ActivatedRoute, private _placeService: PlaceService, private _commentService: CommentService) {
  }

  ngOnInit(): void {
    this._authentication.status.subscribe(e => this.isLogged = e);
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this._placeService.getDetails(this.id).subscribe((response: any) => {
      this._favoriteService.isFav(this.id).subscribe((res:any) => {
        this.isFavorite = res.success;
      });
      this.place = response;
      console.log(this.place.category);
      this._placeService.getRelatedPlaces(this.place.category).subscribe((res:any)=>{
        console.log("Relateeed places");
        
        console.log(res.data);
       this.relatedPlaces=res.data;
       console.log(res.data);
        
      },(err)=>{
        alert("yallahwooo");
        console.log(err);
        
      })
    }, error => {
      alert('yallahwyyy');
    });
   
    
   
  }

  delete(id: string, index: number) {
    this._commentService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }

  
  update(e: any) {
    this._commentService.updateComment(this.ido, {'text': this.addedComment}).subscribe((res) => {
      e.value = '';
      this.isEditEnable = !this.isEditEnable;
      this.ngOnInit();
    }, (error => {
      alert('yllahwyyyyyyy');
      console.log(error);
    }));
  }

  edit(id: string, text: string) {
    this.isEditEnable = !this.isEditEnable;
    this.ido = id;
    this.addedComment = text;
  }

  addComment(e: any) {
    if (!this.isLogged) {
      this._router.navigateByUrl('user/login');
    }
    const comment: Comment = {
      text: this.addedComment,
    };
    this._placeService.addComment(this.place._id, comment).subscribe((res) => {
      this.ngOnInit();
      e.value = '';
    }, (error) => {
      console.log(error);
    });
  }

  Render() {
    setTimeout(() => {
      this.ngOnInit();
    }, 4000);
  }
}
