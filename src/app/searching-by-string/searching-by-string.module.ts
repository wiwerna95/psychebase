import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingBarComponent } from './components/searching-bar/searching-bar.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class SearchingByStringModule { }
