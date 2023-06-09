import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Hospital } from 'src/app/models/Hospital.model';
import { DataService } from 'src/app/services/data.service';
import { SingleRating } from 'src/app/models/SingleRating.model'

@Component({
  selector: 'app-hosptial-rating',
  templateUrl: './hosptial-rating.component.html',
  styleUrls: ['./hosptial-rating.component.css'],
})
export class HospitalRatingComponent implements OnInit, OnChanges {
  @Input() hospitalRating: any;
  @Output() addedRating = new EventEmitter<any>();
  public rating: number = 0;
  public isClicked = false;
  private singleRating: SingleRating= new SingleRating;
  ratingsForHospital: SingleRating[] = []
  ratingForUser: number = 0;
  
  ngOnInit() {
   
  }

  ngOnChanges() {
    if (this.hospitalRating.address !== undefined) {
      this.getRating()
    }

  }

  constructor(private hospitalService: DataService) {
  }
  getRating() {
    this.hospitalService.getAll()
    .subscribe( data => {
      data.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        let hospital: Hospital;
        hospital = data;
        hospital.id = id;

        if (data.name ===  this.hospitalRating.name) {
          this.rating = data.rating;
        }
      });
    })    
  }

  putRating() {
    this.isClicked = true;
    this.addedRating.emit(this.rating)
  }

  calculateRating() {
    this.singleRating = {
      hospital: this.hospitalRating.name,
      rating: this.ratingForUser
    }
    console.log(this.hospitalRating.name)

    this.hospitalService.putSingleRating(this.singleRating)
    this.hospitalService.getAllRatings().subscribe( (data: any) => {
      data.docs.forEach((doc: { data: () => SingleRating; }) => {
        if (doc.data().hospital === this.hospitalRating.name) {
          this.ratingsForHospital.push(doc.data())
          let rating: number = 0;
        let ratingsForHospitalLength = this.ratingsForHospital.length;
        this.ratingsForHospital.forEach((x: SingleRating) => {
         rating = rating + x.rating!
        })
        rating = Math.round(rating/ratingsForHospitalLength);
        console.log('rating', rating)
        this.rating = rating;
        }
      })
      this.hospitalRating.rating = this.rating;
      console.log('hospital ', this.hospitalRating)
      this.hospitalService.putRating(this.hospitalRating);
      
    })

  }
}


