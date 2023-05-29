import { QuerySnapshot } from '@angular/fire/compat/firestore';
import { subscribeOn } from 'rxjs';
import { HospitalService } from './../../services/hospital.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hospital } from 'src/app/models/Hospital.model';
import { Departament } from 'src/app/models/Departament.model';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {

  public hospital: Hospital = new Hospital;
  public submitted: boolean = false;
  public sub: any;
  public name: any;
  public departaments: Departament[] = [];
  public temporaryDepartament: Departament = new Departament;

  constructor(private route: ActivatedRoute, private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.name = params;
      this.searchHospital();
   });
  }

  private searchHospital() {
    this.hospitalService.getAll().subscribe( data => {
      const hospitals: Hospital[] = [];
      data.docs.forEach((doc: { data: () => Hospital; }) => {
        hospitals.push(doc.data())
      })
      hospitals.forEach( (hosp: Hospital) => {
        if (hosp.name === this.name.name) {
          this.hospital = hosp;
          this.getDepartamentsOfHospital();
        }
      })
      
    })
  }

  getDepartamentsOfHospital() {
    this.hospitalService.getDepartamet().subscribe( (departaments: any) => {
      this.departaments = departaments;
    })
  }

  saveDepartament() {
    const departament = {
      name: this.temporaryDepartament.name,
      type: this.temporaryDepartament.type,
      hospitalName: this.hospital.name,
    }

    this.hospitalService.addDepartament(departament);
  }

}
