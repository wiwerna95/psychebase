import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './components/start-page/start-page.component';
import { HospitalPreparationComponent } from './components/hospital-preparation/hospital-preparation.component';
import { AboutComponent } from './components/about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { InformationsRoutingModule } from './informations-routing.module';


@NgModule({
  declarations: [
    StartPageComponent,
    HospitalPreparationComponent,
    AboutComponent
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    InformationsRoutingModule
    
  ]
})
export class InformationsModule { }
