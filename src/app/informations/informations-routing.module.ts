import { HospitalPreparationComponent } from './components/hospital-preparation/hospital-preparation.component';
import { AboutComponent } from './components/about/about.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHospitalComponent } from '../showing/components/add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from '../showing/components/update-hospital/update-hospital.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  { path: 'start-page', component: StartPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'prepare', component: HospitalPreparationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InformationsRoutingModule { }