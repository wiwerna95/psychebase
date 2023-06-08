import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingRoutingModule } from './searching-routing.module';
import { VoivodeshipsSearchingComponent } from './components/voivodeships-searching/voivodeships-searching.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
    CdkAccordionModule,
    SearchingRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    SearchingRoutingModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule
 ]
})
export class SearchingModule { }
