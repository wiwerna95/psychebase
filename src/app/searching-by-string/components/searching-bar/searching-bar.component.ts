import { HospitalService } from './../../../services/hospital.service';
import { Hospital } from 'src/app/models/Hospital.model';
import { CommunicationService } from './../../../services/communication-service.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.css']
})
export class SearchingBarComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  
  public search: string = '';
  public autoCompleteList: Array<string> = ['Poznań'];
  private resultOfSearching: Array<Hospital> = [];
  private hospitals: Array<Hospital> = [];
  constructor(private communicationService: CommunicationService,
              private hospitalService: HospitalService) {}


  public ngOnInit(): void {
    this.getAllHospitals();
  }

  public searchHospital() {
    console.log(this.search);
    this.searchHospitalByCity();
  }

  private getAllHospitals() {
    this.hospitalService.getAll().subscribe( data => {
      const hospitals: Hospital[] = [];
      data.docs.forEach((doc: { data: () => Hospital; }) => {
        hospitals.push(doc.data())
        
      })
      console.log(hospitals)
      this.hospitals = hospitals;
    })
  }


  private searchHospitalByCity() {
    console.log('search by', this.hospitals);
    this.resultOfSearching =  this.hospitals.filter(x => {
      console.log(x.city, this.search)
      return x.city === this.search;
      
    })
    if (this.resultOfSearching.length === 0 && this.search === '') {
      this.communicationService.transferResultOfSearching(this.hospitals);
    } else {
      this.communicationService.transferResultOfSearching(this.resultOfSearching);

    }
  }
}
