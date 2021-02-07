import { Component, OnInit } from '@angular/core';
import {Place} from '../../../models/place';
import {ActivatedRoute} from '@angular/router';
import {PlaceService} from '../../../services/place.service';
import { CommentService } from '../../../services/comment.service';
import {Comment} from '../../../models/comment';
import {ApiService} from '../../../services/api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  place: Place = new Place();
  id: any;
  addedComment: string = '';
  // tslint:disable-next-line:variable-name
  constructor(private _api: ApiService, private _activatedRoute: ActivatedRoute, private _placeService: PlaceService,private _commentService:CommentService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    });
    this._placeService.getDetails(this.id).subscribe((response: any) => {
      console.log(response);
      this.place = response;
    } , error => {
     alert('yallahwyyy');
    });
  }
  delete(id: string, index: number){
    this._commentService.delete(id).subscribe(() => {
      this._placeService.getDetails(this.id).subscribe((response: any) => {
        console.log(response);
        this.place = response;
      } , error => {
        alert('yallahwyyy');
      });
    });
  }
  addComment(e: any){
    const comment: Comment = {
      text: this.addedComment,
    };
    console.log(this.place._id);
    console.log(this.addedComment);
    this._placeService.addComment(this.place._id, comment).subscribe((res) => {
      this._api.getWithToken('/user').subscribe((response) => {
        comment.user = response.profile;
        this.place.comments.push(comment);
        e.value = '';
      });
    }, (error) => {
      console.log(error);

    });
  }
}
