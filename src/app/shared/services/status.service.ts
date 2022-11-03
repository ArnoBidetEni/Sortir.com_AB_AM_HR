import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url+"/statuses";
  readonly EXTENSION = ".json";

  constructor(private httpClient : HttpClient) { }

  getStatus(statusId: number): Observable<Status | undefined> {
    return this.httpClient.get<Status>(this.BASE_URL+"/"+statusId+this.EXTENSION);
  }
  getStatuss(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(this.BASE_URL+this.EXTENSION);
  }
  createStatus(status: Status): Observable<Status> {
    return this.httpClient.post<Status>(this.BASE_URL + this.EXTENSION, status);
  }
  updateStatus(statusId: number, status: Partial<Status>) {
    return this.httpClient.patch<Status>(this.BASE_URL + "/" + statusId + this.EXTENSION, status);
  }
  deleteStatus(statusId: number) {
    return this.httpClient.delete<void>(this.BASE_URL + "/" + statusId + this.EXTENSION);
  }
}
