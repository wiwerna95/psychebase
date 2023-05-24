import { Hospital } from 'src/app/models/Hospital.model';
import { HospitalService } from './../../services/hospital.service';
import { Component, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Tutorial } from 'src/app/models/tutorial.model';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  hospitals?: Hospital[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';

  constructor(private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
   this.hospitals = this.hospitalService.getAll().subscribe( pipe((x:any)=>console.log(x)))
  
  }
}
