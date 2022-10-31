import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../../../shared/interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url+"/cities";
  readonly EXTENSION = ".json";

  constructor(private httpClient : HttpClient) { }

  getCity(cityId: number): Observable<City | undefined> {
    return this.httpClient.get<City>(this.BASE_URL+"/"+cityId+this.EXTENSION)
  }
  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.BASE_URL+this.EXTENSION)
  }
  createCity(city: City): Observable<City> {
    return of(city);
  }
  updateCity(cityId: number, city: City) {

  }
  deleteCity(cityId: number) {

  }
}
