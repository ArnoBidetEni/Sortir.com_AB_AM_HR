import { Injectable } from '@angular/core';
import { Excursion } from '../../../shared/interfaces/excursion';
import { Observable } from 'rxjs';
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
  createExcursion(excursion: Excursion): Observable<Excursion> {
    return this.httpClient.post<Excursion>(this.BASE_URL, toSymfonyReadableDependencies(excursion))
  }
  updateExcursion(excursionId: number, excursion: Excursion): Observable<Excursion> {
    return this.httpClient.patch<Excursion>(this.BASE_URL+"/" + excursionId, toSymfonyReadableDependencies(excursion))
  }
  deleteExcursion(excursionId: number): Observable<void> {
    return this.httpClient.delete<void>(this.BASE_URL + "/" + excursionId)
  }
  subscribeToExcursion(excursionId : number, participantId : number){
    return this.httpClient.post<Excursion>(`${environment.api_ip+environment.api_base_url}/excursion/${excursionId}/register/${participantId}`, {})
  }

  desistFromExcursion(excursionId : number, participantId : number){
    return this.httpClient.post<Excursion>(`${environment.api_ip+environment.api_base_url}/excursion/${excursionId}/withdraw/${participantId}`, {})
  }
}
function toSymfonyReadableDependencies(excursion: Excursion) {
  let value: any = {...excursion};
  value.organisator = "/api/participants/" + excursion.organisator?.participantId;;
  value.participants = excursion.participants.map(el => "/api/participants/" + el.participantId);
  value.excursionPlace = "/api/places/" + excursion.excursionPlace?.placeId;
  value.status = "/api/statuses/" + excursion.status?.statusId;
  value.campus = "/api/campuses/" + excursion.campus?.campusId;


  return value;
}
