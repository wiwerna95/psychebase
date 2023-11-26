import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Hospital } from 'src/app/models/Hospital.model';
import { CommunicationService } from 'src/app/services/communication-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit{
  search: string = '';
  public autoCompleteList: Array<string> = [];
  private resultOfSearching: Array<Hospital> = [];
  public hospitals: Array<Hospital> = [];
  public result: Array<Hospital> = [];

  constructor(private communicationService: CommunicationService,
    private hospitalService: DataService,
    private router: Router) {

  }

  ngOnInit() {
    this.hospitalService.getAll()
    .subscribe( data => {
     data.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        let hospital: Hospital;
        hospital = data;
        hospital.id = id;

        this.hospitals.push(hospital)
      });
   })
  this.getAutocompleteList();
  }
  searchHospital() {
    this.resultOfSearching =  this.hospitals.filter((x: Hospital) => {
      const trimedCity = x.city?.replace(/ /g,'').toLowerCase();
      const trimedSearch = this.search.replace(/ /g,'').toLowerCase();
      return trimedCity === trimedSearch;
      
    })
    if (this.resultOfSearching.length === 0 && this.search === '') {
      this.result = this.hospitals;
      this.communicationService.transferResultOfSearching(this.hospitals);
    } else {
      this.result = this.resultOfSearching;
      this.communicationService.transferResultOfSearching(this.resultOfSearching);

    }
  }

  private getAutocompleteList() {
    this.autoCompleteList = new Array<any>();
   
    for (let element of this.hospitals) {
      this.autoCompleteList.push(element.city!);
    }
  }

  public redirectToHospital(hospital: any) {
    this.router.navigate(['/show', hospital.name])
  }

}
