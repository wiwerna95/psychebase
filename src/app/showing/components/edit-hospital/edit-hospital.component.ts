import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hospital } from 'src/app/models/Hospital.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrl: './edit-hospital.component.css'
})
export class EditHospitalComponent implements OnInit {
  public hospital: Hospital = new Hospital;
  public sub: any;
  public hospitalParams: any;

  constructor(private hospitalService: DataService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.hospitalParams = params;
      this.searchHospital();
   });
  }

  saveHospital() {
    console.log(this.hospital.logo)

    this.hospitalService.updateHospital(this.hospital)
  }

  private searchHospital() {
    this.hospitalService.getAll()
    .subscribe( data => {
     data.map(a => {
      const hospitals: Hospital[] = [];
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        let hospital: Hospital;
        hospital = data;
        hospital.id = id;
        
        

        hospitals.push(hospital);
        hospitals.forEach( (hosp: Hospital) => {
          if (hosp.name === this.hospitalParams.hospital) {
            this.hospital = hosp;
          }
       });
      })
    })
      
  }


}
