import { HospitalService } from './../../../services/hospital.service';
import { Hospital } from 'src/app/models/Hospital.model';
import { CommunicationService } from './../../../services/communication-service.service';
import { Component, EventEmitter, Output, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchingBarComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  
  public search: string = '';
  public autoCompleteList: Array<string> = [];
  private resultOfSearching: Array<Hospital> = [];
  public hospitals: Array<Hospital> = [];
displayFn: any;
  constructor(private communicationService: CommunicationService,
              private hospitalService: HospitalService) {}


  public ngOnInit(): void {
    this.getAllHospitals();
  }

  public searchHospital() {
    this.searchHospitalByCity();
  }

  private getAutocompleteList() {
    this.autoCompleteList = new Array<any>();
   
    for (let element of this.hospitals) {
      this.autoCompleteList.push(element.city!);
    }
  }

  private getAllHospitals() {
    this.hospitalService.getAll().subscribe( data => {
      const hospitals: Hospital[] = [];
      data.docs.forEach((doc: { data: () => Hospital; }) => {
        hospitals.push(doc.data())
        
      })
      console.log(hospitals)
      this.hospitals = hospitals;
      this.getAutocompleteList();
    })
  }


  private searchHospitalByCity() {
    this.resultOfSearching =  this.hospitals.filter((x: Hospital) => {
      const trimedCity = x.city?.replace(/ /g,'').toLowerCase();
      const trimedSearch = this.search.replace(/ /g,'').toLowerCase();
      return trimedCity === trimedSearch;
      
    })
    if (this.resultOfSearching.length === 0 && this.search === '') {
      this.communicationService.transferResultOfSearching(this.hospitals);
    } else {
      this.communicationService.transferResultOfSearching(this.resultOfSearching);

    }
  }

  public filterPostList(event: Event) {
    console.log(event);
  }
}
