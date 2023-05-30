import { Component } from '@angular/core';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.css']
})
export class SearchingBarComponent {

  search: string = ''

  searchHospital() {
    console.log('hospital')
  }
}
