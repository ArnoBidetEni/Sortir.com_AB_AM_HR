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
  createParticipant(participant: Participant): Observable<Participant> {
    return this.httpClient.post<Participant>(this.BASE_URL + this.EXTENSION, participant);
  }
  updateParticipant(participantId: number, participant: Participant) {
    return this.httpClient.patch<Participant>(this.BASE_URL + "/" + participantId + this.EXTENSION, participant)
  }
  deleteParticipant(participantId: number) {
    return this.httpClient.delete<void>(this.BASE_URL + "/" + participantId + this.EXTENSION)
  }
}
