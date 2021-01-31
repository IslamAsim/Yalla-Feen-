import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean = false;
  @Output() change = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  changeFavorite()
  {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
