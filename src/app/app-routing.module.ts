import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HospitalsListComponent } from './components/hospitals-list/hospitals-list.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';

const routes: Routes = [
  { path: '', redirectTo: 'hospitals', pathMatch: 'full' },
  { path: 'hospitals', component: HospitalsListComponent },
  { path: 'add', component: AddHospitalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
