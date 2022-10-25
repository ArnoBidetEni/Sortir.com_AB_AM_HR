import { Injectable } from '@angular/core';
import { Excursion, excursions } from '../interfaces/excursion';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {

  constructor() { }

  getExcursion(id : number): Observable<Excursion | undefined>{
    return of(excursions.find(el=>el.excursionId === id))
  }
  getExcursions(): Observable<Excursion[]>{
    return of(excursions)
  }
}
