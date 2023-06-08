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
  public rating: any;
  public isClicked = false;
  private singleRating: SingleRating= new SingleRating;


  
  ngOnInit() {
   
  }

  ngOnChanges() {
    console.log(this.hospitalRating)
    if (this.hospitalRating.address !== undefined) {
      this.getRating()
    }

  }

  constructor(private hospitalService: DataService) {
  }
  getRating() {
    console.log('get')
      this.hospitalService.getAll().subscribe( data => {
        data.docs.forEach((doc: { data: () => Hospital; }) => {
          if (doc.data().name ===  this.hospitalRating.name) {
            this.rating = doc.data().rating;
          }
        })
      })
    }

  putRating() {
    console.log(this.rating)
    this.isClicked = true;
    this.addedRating.emit(this.rating)
  }

  calculateRating() {
    this.singleRating = {
      hospital: this.hospitalRating.name,
      rating: this.rating
    }
  }
}


