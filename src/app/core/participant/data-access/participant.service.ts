import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Participant, participantTestData } from '../../../shared/interfaces/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url+"/participants";
  readonly EXTENSION = ".json";

  constructor(private httpClient : HttpClient) { }

  getParticipant(participantId: number): Observable<Participant | undefined> {
    return this.httpClient.get<Participant>(this.BASE_URL+"/"+participantId+this.EXTENSION);
  }
  getParticipants(): Observable<Participant[]> {
    return this.httpClient.get<Participant[]>(this.BASE_URL+this.EXTENSION);
  }
  createParticipant(city: Participant): Observable<Participant> {
    return of(city);
  }
  updateParticipant(participantId: number, city: Participant) {

  }
  deleteParticipant(participantId: number) {

  }
}
