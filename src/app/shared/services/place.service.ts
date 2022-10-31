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

  constructor() { }

  getPlace(placeId: number): Observable<Place | undefined> {
    return of(places.find(el=>el.placeId === placeId));
  }
  getPlaces(): Observable<Place[]> {
    return of(places);
  }
  createPlace(place: Place): Observable<Place> {
    return of(place);
  }
  updatePlace(placeId: number, place: Place) {

  }
  deletePlace(placeId: number) {

  }
}
