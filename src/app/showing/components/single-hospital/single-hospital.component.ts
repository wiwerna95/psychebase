import { Departament } from 'src/app/models/Departament.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Hospital } from 'src/app/models/Hospital.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-single-hospital',
  templateUrl: './single-hospital.component.html',
  styleUrls: ['./single-hospital.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SingleHospitalComponent implements OnInit {
  public hospital: Hospital = new Hospital();
  private hospitalParams: any;
  private sub: any;
  public loggedIn = false;
  public hospital1: any;
  public departaments: Departament[] = [];
  public displayedColumns: string[] = ['Nazwa', 'Typ'];

  constructor(private hospitalService: DataService,
            private route: ActivatedRoute,
            private auth: AuthService,
            private router: Router) {

  }

  public ngOnInit() {
    this.auth.isLoggedInSubject.subscribe( (resp: boolean)=> {
      this.loggedIn = resp;
    })
    this.sub = this.route.params.subscribe((params: any) => {
      this.hospitalParams = params;
      this.getAllHospitals();
      this.getAllDepartaments();
      this.hospital1 = this.hospital;
   });
   
   
  }


  private getAllHospitals() {
    this.hospitalService.getAll()
    .subscribe( data => {
     data.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const hospitalFromRouting = this.hospitalParams.hospital;

        if (data.name === hospitalFromRouting) {
          this.hospital = data;
          this.hospital.id = id;
        }
      });
   })
  }

  private getAllDepartaments(): Departament[] {
    this.hospitalService.getDepartamet().subscribe( data => {
      data.forEach((doc: Departament) => {
        if (this.hospital.name === doc.hospitalName) {
          this.departaments.push(doc)
        }
        
        this.departaments = this.departaments
        .filter((item): item is Departament => !!item)
        .sort((i, j) => i.number - j.number)
      })
    })
    return this.departaments;
  }

  public putRating(event: any) {
    this.hospital.rating = event;
    this.hospitalService.putRating(this.hospital)
  }
}


