import { Injectable } from '@angular/core';
import { Excursion, excursions } from '../../../shared/interfaces/excursion';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url+"/excursions";
  readonly EXTENSION = ".json";

  constructor(private httpClient : HttpClient) { }

  getExcursion(excursionId: number): Observable<Excursion | undefined> {
    return this.httpClient.get<Excursion>(this.BASE_URL+"/"+excursionId+this.EXTENSION)
  }

  getExcursions(): Observable<Excursion[]> {
    return this.httpClient.get<Excursion[]>(this.BASE_URL+this.EXTENSION)
  }
}
