import { CommunicationService } from './../../../services/communication-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Hospital } from 'src/app/models/Hospital.model';
import { HospitalService } from '../../../services/hospital.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable, subscribeOn } from 'rxjs';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { QuerySnapshot } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.css'],

})
export class HospitalsListComponent implements OnInit {
  hospitals: Hospital[] = [];
  searchText: string = ''

  constructor(private hospitalService: HospitalService, private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.retrieveHospitals();
    this.communicationService.transferResultOfSearching$.subscribe( value => {
      this.hospitals = value;
    })
  }



  retrieveHospitals(): void {
    this.hospitalService.getAll()
    .subscribe( data => {
      data.docs.forEach((doc: { data: () => Hospital; }) => {
        this.hospitals.push(doc.data())
      })
    })
  }
}
