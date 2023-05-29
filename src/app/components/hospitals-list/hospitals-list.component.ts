import { Hospital } from 'src/app/models/Hospital.model';
import { HospitalService } from '../../services/hospital.service';
import { Component, OnInit } from '@angular/core';
import { map, subscribeOn } from 'rxjs';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';


@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.css']
})
export class HospitalsListComponent implements OnInit {
  hospitals: Hospital[] = [];

  constructor(private hospitalService: HospitalService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.hospitalService.getAll()
    .subscribe( (data: any) => {
      data.docs.forEach((doc: any) => {
        this.hospitals.push(doc.data())
      })
    })
  }
}
