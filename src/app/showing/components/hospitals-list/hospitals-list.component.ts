import { CommunicationService } from './../../../services/communication-service.service';
import { Hospital } from 'src/app/models/Hospital.model';
import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.css'],

})
export class HospitalsListComponent implements OnInit {
  hospitals: Hospital[] = [];
  searchText: string = ''
  isLogged: boolean = false;

  constructor(
    private hospitalService: DataService, 
    private communicationService: CommunicationService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.retrieveHospitals();
    this.communicationService.transferResultOfSearching$.subscribe( value => {
      this.hospitals = value;
    })
    this.auth.isLoggedInSubject.subscribe( (resp: boolean)=> {
      this.isLogged = resp;
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
