import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of, subscribeOn } from 'rxjs';
import { Hospital } from '../models/Hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private dbPath = '/hospitals';

  constructor(private store: AngularFirestore, private http: HttpClient) {  }

  getAll(): any{
    return of(
      this.store.collection(this.dbPath).valueChanges({ idField: 'id' }))
}

  create(hospital: Hospital) {
      this.store.collection('/hospitals').add({...hospital})
  }
}
