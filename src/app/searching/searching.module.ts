import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingRoutingModule } from './searching-routing.module';
import { VoivodeshipsSearchingComponent } from './components/voivodeships-searching/voivodeships-searching.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    MatInputModule,
    CdkAccordionModule,
    SearchingRoutingModule,
    MatExpansionModule
  ]
})
export class SearchingModule { }
