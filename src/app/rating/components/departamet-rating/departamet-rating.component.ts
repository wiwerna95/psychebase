import { Component, Input, OnChanges, Output } from '@angular/core';
import { SingleRating } from 'src/app/models/SingleRating.model';

@Component({
  selector: 'app-departamet-rating',
  templateUrl: './departamet-rating.component.html',
  styleUrls: ['./departamet-rating.component.css']
})
export class DepartametRatingComponent implements OnChanges {
  // @Input() hospitalRating: any;
  //@Output() addedRating = new EventEmitter<any>();
  public rating: number = 0;
  public isClicked = true;
  private singleRating: SingleRating= new SingleRating;
  ratingsForHospital: SingleRating[] = []
  ratingForUser: number = 0;

  ngOnChanges() {

  }

  calculateRating() {

  }
}
