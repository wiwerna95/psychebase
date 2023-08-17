import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/Hospital.model';
import { SingleRating } from 'src/app/models/SingleRating.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hospital-ranking',
  templateUrl: './hospital-ranking.component.html',
  styleUrls: ['./hospital-ranking.component.css']
})
export class HospitalRankingComponent implements OnInit {
  hospitalRating: any;
  ratingsForHospital: any;
  rating: number = 0;
  isClicked = false;

  bestHospitals: any[]= [];
  hospitals: Hospital[] = [];

  


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe( (data: any)=> {
      let newArray = [...data];
      newArray.map((a: any) => {
        const data: any= a.payload.doc.data();
    
        this.hospitals.push(data)
      })
      this.bestHospitals = this.hospitals.sort((a: any, b: any) => b.rating - a.rating);
      this.bestHospitals =  this.bestHospitals.slice(0,9)
    })
  }

  }

 


