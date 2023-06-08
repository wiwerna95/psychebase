import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hosptial-rating',
  templateUrl: './hosptial-rating.component.html',
  styleUrls: ['./hosptial-rating.component.css'],
  providers: [ {provide, useValue: "stringValue"}],
})
export class HospitalRatingComponent implements OnInit {
  form: FormGroup;
  

  @Input('rating') public rating: number = 3;
  @Input('starCount') public starCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();
  private snackBarDuration: number = 2000;
  public ratingArr: number[] = [];ngOnInit() {
    console.log("a "+this.starCount)
    for (let index: number = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  
  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    console.log(index)
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
function provide(string: any, arg1: { useValue: string; }): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

