import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City, citiesTestData } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCity(cityId: number): Observable<City | undefined> {
    return of(citiesTestData.find(el=>el.cityId === cityId));
  }
  getCities(): Observable<City[]> {
    return of(citiesTestData);
  }
  createCity(city: City): Observable<City> {
    return of(city);
  }
  updateCity(cityId: number, city: City) {

  }
  deleteCity(cityId: number) {

  }
}
