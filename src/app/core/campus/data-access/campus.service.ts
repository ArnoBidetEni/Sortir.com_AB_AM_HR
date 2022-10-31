import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campus, campus } from '../../../shared/interfaces/campus';

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url+"/campuses";
  readonly EXTENSION = ".json";

  constructor(private httpClient : HttpClient) { }

  getCampus(campusId: number): Observable<Campus | undefined> {
    return this.httpClient.get<Campus>(this.BASE_URL+"/"+campusId+this.EXTENSION)
  }
  getCampuses(): Observable<Campus[]> {
    return this.httpClient.get<Campus[]>(this.BASE_URL+this.EXTENSION)
  }
  createCampus(campus: Campus): Observable<Campus> {
    return of(campus);
  }
  updateCampus(campusId: number, campus: Campus) {

  }
  deleteCampus(campusId: number) {

  }
}
