import { Hospital } from 'src/app/models/Hospital.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  transferResultOfSearching$ = new Subject<Hospital[]>();
  constructor() { }


  transferResultOfSearching(listOfResults: Array<Hospital>) {
    this.transferResultOfSearching$.next(listOfResults);
  }
}
