import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City, citiesTestData } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCity(cityId: number): Observable<City> {
    return of(citiesTestData[0]);
  }
  getCitys(cityId: number): Observable<City> {
    return of(citiesTestData[0]);
  }
  createCity(city: City): Observable<City> {
    return of(city);
  }
  updateCity(cityId: number, city: City) {

  }
  deleteCity(cityId: number) {

  }
}
