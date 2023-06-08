import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {  Hospital } from 'src/app/models/Hospital.model';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent {
  hospital: Hospital = {};
  submitted = false;

  constructor(private hospitalService: DataService) { }

  saveHospital(): void {
    this.hospital.rating = 0;
    this.hospitalService.create(this.hospital);
    this.hospital = new Hospital;
    this.submitted = true;
  }
}
