import { Component, OnInit } from '@angular/core';
import {Place} from '../../../models/place';
import {ActivatedRoute} from '@angular/router';
import {PlaceService} from '../../../services/place.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  place: Place = new Place();
  id: string;
  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _placeService: PlaceService) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this._placeService.getDetails(this.id).subscribe((response: any) => {
      console.log(response);
      this.place = response;
    } , error => {
      console.log(error);
    });
  }
}
