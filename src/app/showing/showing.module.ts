import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { UpdateHospitalComponent } from './components/update-hospital/update-hospital.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShowingRoutingModule } from './showing-routing.module';
import { SearchingBarComponent } from '../searching-by-string/components/searching-bar/searching-bar.component';



@NgModule({
  declarations: [
    UpdateHospitalComponent,
    HospitalsListComponent,
    AddHospitalComponent,
    SearchingBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ShowingRoutingModule
  
    
  ]
})
export class ShowingModule { }
