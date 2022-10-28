import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Campus, campus } from '../interfaces/campus';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor() { }

  getCampus(campusId: number): Observable<Campus | undefined> {
    return of(campus.find(el=>el.campusId === campusId));
  }
  getCities(): Observable<Campus[]> {
    return of(campus);
  }
  createCampus(campus: Campus): Observable<Campus> {
    return of(campus);
  }
  updateCampus(campusId: number, campus: Campus) {

  }
  deleteCampus(campusId: number) {

  }
}
