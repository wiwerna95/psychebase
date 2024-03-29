import { Comment } from './../models/Comment.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable, of, subscribeOn, tap, pipe } from 'rxjs';
import { Departament } from '../models/Departament.model';
import { Hospital } from '../models/Hospital.model';
import { SingleRating } from '../models/SingleRating.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: AngularFirestore, private http: HttpClient) { }

  getAll() {
    return this.store.collection<any>('hospitals').snapshotChanges();

  }

  create(hospital: Hospital) {
    this.store.collection('/hospitals').add({...hospital})
  }

  getDepartamet(): Observable<any> {
    return this.store.collectionGroup('departaments').valueChanges()
  }

  addDepartament(departament: Departament) {
    this.store.collection('/departaments').add({...departament});
  }

  getComments(): Observable<any> {
    return this.store.collection('/comments').get();
  }

  addComment(comment: Comment) {
    this.store.collection('/comments').add({...comment});
  }

  putRating(hospital: any) {
    this.store.collection('/hospitals').doc(`${hospital.id}`).update({rating: hospital.rating});
  }

  putSingleRating(rating: SingleRating) {
    this.store.collection('/ratings').add({...rating})
  }

  getAllRatings() {
    return this.store.collection('/ratings').get();
  }

  getAllDepartamentRatings() {

  }

  updateHospital(hospital: Hospital) {
    console.log(hospital.id)
    this.store.collection("hospital").doc(hospital.id).update(
      {
        "address": hospital.address,
        "city": hospital.city,
        "departamentQuantity": hospital.departamentQuantity,
        "description": hospital.description,
        "director": hospital.director,
        "email": hospital.email,
        "id": hospital.id,
        "logo": hospital.logo,
        "name": hospital.name,
        "phone": hospital.phone,
        "rating": hospital.rating,
        "type": hospital.type,
        "page": hospital.page,
        "voivodeship": hospital.voivodeship
      }
    );
  }

  putDepartamentRating() {
    
  }

}
