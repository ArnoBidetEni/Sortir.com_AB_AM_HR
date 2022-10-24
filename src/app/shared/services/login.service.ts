import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn$: Subject<boolean> = new Subject();
  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  constructor() {
  }

  login() {

  }
}
