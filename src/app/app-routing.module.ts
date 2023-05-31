import { HospitalPreparationComponent } from './informations/components/hospital-preparation/hospital-preparation.component';
import { AboutComponent } from './informations/components/about/about.component';
import { UpdateHospitalComponent } from './showing/components/update-hospital/update-hospital.component';
import { StartPageComponent } from './informations/components/start-page/start-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HospitalsListComponent } from './showing/components/hospitals-list/hospitals-list.component';
import { AddHospitalComponent } from './showing/components/add-hospital/add-hospital.component';


const routes: Routes = [
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
