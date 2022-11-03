import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place, places } from '../interfaces/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url+"/places";
  readonly EXTENSION = ".json";

  constructor(private httpClient: HttpClient) { }

  getPlace(placeId: number): Observable<Place | undefined> {
    return this.httpClient.get<Place>(this.BASE_URL + "/" + placeId + this.EXTENSION);
  }
  getPlaces(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(this.BASE_URL + this.EXTENSION);
  }
  createPlace(place: Place): Observable<Place> {
    return this.httpClient.post<Place>(this.BASE_URL + this.EXTENSION, place);
  }
  updatePlace(placeId: number, place: Partial<Place>) {
    return this.httpClient.patch<Place>(this.BASE_URL + "/" + placeId + this.EXTENSION, place);
  }
  deletePlace(placeId: number) {
    return this.httpClient.delete<void>(this.BASE_URL + "/" + placeId + this.EXTENSION);
  }
}
