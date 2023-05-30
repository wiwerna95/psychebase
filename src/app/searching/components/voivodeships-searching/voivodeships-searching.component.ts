import { HospitalService } from './../../../services/hospital.service';
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
  expandedIndex = 0;

  constructor(private hospitalService:  HospitalService) {}

  public ngOnInit() {
    this.hospitalService.getAll().subscribe( data => {
      const hospitals: Hospital[] = [];
      data.docs.forEach((doc: { data: () => Hospital; }) => {
        hospitals.push(doc.data())
        
      })
      console.log(hospitals)
      this.createHospitalsByVoivodeship(hospitals);
    })
  }

  private createHospitalsByVoivodeship(hospitals: Hospital[]) {
    this.arrayWithVoivodeships = [];
    let hospitals1: Hospital[] = [];



// here you can check specific property for an object whether it exist in your array or not

    this.voivodeships.forEach( voivodeship1 => {
      // console.log(voivodeship);
      const object = {
          voivodeship: voivodeship1,
          hospitals: hospitals1
      }
      for (let hospital of hospitals) {
       console.log(hospital.voivodeship, voivodeship1);
       if (hospital.voivodeship === voivodeship1) {
        object.hospitals.push(hospital);
       }
       
      }
    this.arrayWithVoivodeships.push(object);
     
    })

    console.log('jkbkl', this.arrayWithVoivodeships)

  }
}
