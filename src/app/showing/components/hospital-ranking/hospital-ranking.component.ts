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

  bestHospitals: any[]= [];
  hospitals: Hospital[] = []


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe( (data: any)=> {
      let newArray = [...data];
      newArray.map((a: any) => {
        const data: any= a.payload.doc.data();
    
        this.hospitals.push(data)
      })

      //   if (doc.data().hospital === this.hospitalRating.name) {
          
      //     this.ratingsForHospital.push(doc.data())
      //     let rating: number = 0;
      //   let ratingsForHospitalLength = this.ratingsForHospital.length;
      //   this.ratingsForHospital.forEach((x: SingleRating) => {
      //    rating = rating + x.rating!
      //   })
      //   rating = Math.round(rating/ratingsForHospitalLength);
      //   this.rating = rating;
      // }
    })
    this.bestHospitals = this.hospitals.sort((a: any, b: any) => b.rating - a.rating);
    let bestHospitals: any = [];
    console.log('best hosp', this.bestHospitals.slice(2))
    // console.log(this.bestHospitals)
    // if (this.hospitals.length) {
    //   for (let i = 0; i < 10; i++) {
    //     console.log(i, this.hospitals[i])
    //     bestHospitals.push(this.hospitals[i])
    //  }
    // }
    
  //  console.log(bestHospitals)

 
  
  }

  }

 


