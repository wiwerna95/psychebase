import { HospitalPreparationComponent } from './components/hospital-preparation/hospital-preparation.component';
import { AboutComponent } from './components/about/about.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHospitalComponent } from '../showing/components/add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from '../showing/components/update-hospital/update-hospital.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'o-stronie', component: AboutComponent },
  { path: 'przygotowanie', component: HospitalPreparationComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InformationsRoutingModule { }