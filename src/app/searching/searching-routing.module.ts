import { SingleHospitalComponent } from './../showing/components/single-hospital/single-hospital.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoivodeshipsSearchingComponent } from './components/voivodeships-searching/voivodeships-searching.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  { path: 'wojewodztwa', component: VoivodeshipsSearchingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SearchingRoutingModule { }