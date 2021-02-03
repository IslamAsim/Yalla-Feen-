import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [RatingComponent, FavoriteComponent],
  imports: [
    CommonModule
  ],
  exports: [RatingComponent, FavoriteComponent]
})
export class SharedModule { }
