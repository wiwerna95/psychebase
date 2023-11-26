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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartPageComponent,
    HospitalPreparationComponent,
    AboutComponent,
    HospitalRankingComponent,
    MapComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    InformationsRoutingModule,
    FormsModule,
    MatCardModule
    
  ]
})
export class InformationsModule { }
