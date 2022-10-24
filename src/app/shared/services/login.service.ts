import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  get isLoggedIn$(): BehaviorSubject<boolean> {
    return this.loggedIn$;
  }

  constructor() {
  }

  login() {

  }
}
