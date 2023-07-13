import { CommunicationService } from './../../../services/communication-service.service';
import { Hospital } from 'src/app/models/Hospital.model';
import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.css'],

})
export class HospitalsListComponent implements OnInit {
  hospitals: Hospital[] = [];
  searchText: string = ''

  constructor(private hospitalService: DataService, private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.retrieveHospitals();
    this.communicationService.transferResultOfSearching$.subscribe( value => {
      this.hospitals = value;
    })
  }



  retrieveHospitals(): void {
    this.hospitalService.getAll()
    .subscribe( data => {
     data.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        let hospital: Hospital;

        hospital = data;
        hospital.id = id;
        
        this.hospitals.push(hospital);
      });
   })
  }
}
