import { HospitalPreparationComponent } from './components/hospital-preparation/hospital-preparation.component';
import { AboutComponent } from './components/about/about.component';
import { UpdateHospitalComponent } from './components/update-hospital/update-hospital.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  { path: 'hospitals', component: HospitalsListComponent },
  { path: 'add', component: AddHospitalComponent },
  { path: 'start-page', component: StartPageComponent},
  { path: 'update/:name', component: UpdateHospitalComponent},
  { path: 'about', component: AboutComponent},
  { path: 'prepare', component: HospitalPreparationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
