import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/Hospital.model';

@Component({
  selector: 'app-voivodeships-searching',
  templateUrl: './voivodeships-searching.component.html',
  styleUrls: ['./voivodeships-searching.component.css'],
  standalone: true,
  imports: [CdkAccordionModule, NgFor]
})
export class VoivodeshipsSearchingComponent implements OnInit {
  panelOpenState = false;
  arrayWithVoivodeships: any[] = [];
  hospitals: Hospital[] = [];
  voivodeships: string[] = [
    'Województwo dolnośląskie',
    'Województwo kujawsko-pomorskie',
    'Województwo lubelskie',
    'Województwo lubuskie',
    'Województwo łódzkie',
    'Województwo małopolskie',
    'Województwo mazowieckie',
    'Województwo opolskie',
    'Województwo podkarpackie',
    'Województwo podlaskie',
    'Województwo pomorskie',
    'Województwo śląskie',
    'Województwo świętokrzyskie',
    'Województwo warmińsko-mazurskie',
    'Województwo wielkopolskie',
    'Województwo zachodniopomorskie'
  ];

  constructor(private hospitalService:  DataService,
              private router: Router) {}

  public ngOnInit() {
    this.hospitalService.getAll().subscribe( data => {
      const hospitals: Hospital[] = [];
      data.docs.forEach((doc: { data: () => Hospital; }) => {
        hospitals.push(doc.data())
        
      })
      this.hospitals = hospitals;    

      for (let wojewodztwo of this.voivodeships) {
        const array: Hospital[] = []
        const object = {
          voivodeship: wojewodztwo,
          hospitals: array
        }
        for (let hospital of this.hospitals) {
          if (hospital.voivodeship === wojewodztwo) {
            object.hospitals.push(hospital)
          }
        }
        this.arrayWithVoivodeships.push(object)
      }
    })
  }


  redirectToHospital(hospital: Hospital) {
    this.router.navigate(['/show', hospital.name])
  }
}
