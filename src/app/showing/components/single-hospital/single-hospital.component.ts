import { Departament } from 'src/app/models/Departament.model';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from './../../../services/hospital.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hospital } from 'src/app/models/Hospital.model';

@Component({
  selector: 'app-single-hospital',
  templateUrl: './single-hospital.component.html',
  styleUrls: ['./single-hospital.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SingleHospitalComponent implements OnInit {
  public hospital: Hospital = new Hospital();
  private name: any;
  private sub: any;
  public departaments: Departament[] = [];
  public displayedColumns: string[] = ['Nazwa', 'Typ'];


  constructor(private hospitalService: HospitalService,
            private route: ActivatedRoute) {

  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.name = params;
      this.getAllHospitals();
      this.getAllDepartaments();
   });
   
   
  }

  private getAllHospitals() {
    this.hospitalService.getAll().subscribe( data => {
      data.docs.forEach((doc: { data: () => Hospital }) => {
       const hospitalFromRouting = this.name.hospital
       if (doc.data().name === hospitalFromRouting) {
        this.hospital = doc.data()
      }
      })
    })
  }

  private getAllDepartaments(): Departament[] {
    this.hospitalService.getDepartamet().subscribe( data => {
      data.forEach((doc: Departament) => {
        if (this.hospital.name === doc.hospitalName) {
          this.departaments.push(doc)
        }
      })
     
    })
    return this.departaments;
  }
}


