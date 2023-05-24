import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable, of, subscribeOn, tap } from 'rxjs';
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
}
