import { SingleHospitalComponent } from './components/single-hospital/single-hospital.component';
import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from '../informations/components/start-page/start-page.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from './components/update-hospital/update-hospital.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  { path: 'dodaj', component: AddHospitalComponent },
  { path: 'szpitale', component: HospitalsListComponent },
  { path: 'update/:name', component: UpdateHospitalComponent },
  { path: 'show/:hospital', component: SingleHospitalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShowingRoutingModule { }