import { HospitalService } from './../../services/hospital.service';
import { Component, OnInit } from '@angular/core';
import {  Hospital } from 'src/app/models/Hospital.model';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  hospital: Hospital = {};
  submitted = false;

  constructor(private hospitalService: HospitalService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    console.log(this.hospital)
    this.hospitalService.create(this.hospital).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.hospital = new Hospital();
  }
}
