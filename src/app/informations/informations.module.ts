import { RouterModule } from '@angular/router';
import { MatCard, MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './components/start-page/start-page.component';
import { HospitalPreparationComponent } from './components/hospital-preparation/hospital-preparation.component';
import { AboutComponent } from './components/about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { InformationsRoutingModule } from './informations-routing.module';
import { HospitalRankingComponent } from '../showing/components/hospital-ranking/hospital-ranking.component';
import { MapComponent } from './components/map/map.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    StartPageComponent,
    HospitalPreparationComponent,
    AboutComponent,
    HospitalRankingComponent,
    MapComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    InformationsRoutingModule,
    FormsModule,
    MatCardModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule
  
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class InformationsModule { }
