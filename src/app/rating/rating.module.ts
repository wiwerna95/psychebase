import { HospitalRatingComponent } from './components/hospital-rating/hosptial-rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingRoutingModule } from './rating-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { DepartametRatingComponent } from './components/departamet-rating/departamet-rating.component';


@NgModule({
  declarations: [
    CommentsComponent,
    DepartametRatingComponent,
    HospitalRatingComponent
  ],
  imports: [
    CommonModule,
    RatingRoutingModule
  ]
})
export class RatingModule { }
