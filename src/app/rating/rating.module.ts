import { HospitalRatingComponent } from './components/hospital-rating/hosptial-rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingRoutingModule } from './rating-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { DepartametRatingComponent } from './components/departamet-rating/departamet-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    DepartametRatingComponent,
    
  ],
  imports: [
    CommonModule,
    RatingRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule
  ]
})
export class RatingModule { }
