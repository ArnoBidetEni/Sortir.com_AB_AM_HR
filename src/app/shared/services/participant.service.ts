import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Participant, participantTestData } from '../interfaces/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private httpClient : HttpClient) { }

  getParticipant(participantId: number): Observable<Participant | undefined> {
    return of(participantTestData.find(el=>el.participantId === participantId));
  }
  getParticipants(): Observable<Participant[]> {
    return of(participantTestData);
  }
  createParticipant(city: Participant): Observable<Participant> {
    return of(city);
  }
  updateParticipant(participantId: number, city: Participant) {

  }
  deleteParticipant(participantId: number) {

  }
}
