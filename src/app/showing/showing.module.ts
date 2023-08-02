import { HospitalRatingComponent } from '../rating/components/hospital-rating/hosptial-rating.component';
import { CommentsComponent } from './../rating/components/comments/comments.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { UpdateHospitalComponent } from './components/update-hospital/update-hospital.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShowingRoutingModule } from './showing-routing.module';
import { SearchingBarComponent } from '../searching/components/searching-bar/searching-bar.component';
import { SingleHospitalComponent } from './components/single-hospital/single-hospital.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxStarRatingModule } from 'ngx-star-rating';



@NgModule({
  declarations: [
    UpdateHospitalComponent,
    HospitalsListComponent,
    AddHospitalComponent,
    SearchingBarComponent,
    SingleHospitalComponent,
    HospitalRatingComponent,
    CommentsComponent
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    ShowingRoutingModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    NgxStarRatingModule
  
    
  ]
})
export class ShowingModule { }
