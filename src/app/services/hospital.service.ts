import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable, of, subscribeOn, tap, pipe } from 'rxjs';
import { Departament } from '../models/Departament.model';
import { Hospital } from '../models/Hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private dbPath = '/hospitals';

  constructor(private store: AngularFirestore, private http: HttpClient) {  }

  getAll(): any{
    console.log('SF');
    return this.store.collection('/hospitals').get();
}

  create(hospital: Hospital) {
      this.store.collection('/hospitals').add({...hospital})
  }

  getDepartamet() 

   return  this.store.collectionGroup('departaments').valueChanges()
  }

  addDepartament(departament: Departament) {
    this.store.collection('/departaments').add({...departament});
  }
}
