import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, of, delay, tap, Observable } from 'rxjs';
import { Participant, participant0, participant1 } from '../interfaces/participant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private localstorageKeys = {
    isLoggedIn: "isLoggedIn"
  }
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(coerceBooleanProperty(localStorage.getItem(this.localstorageKeys.isLoggedIn)));
  loggedUser$: BehaviorSubject<Participant | null> = new BehaviorSubject<Participant | null>(null);

  constructor(private router: Router, private httpClient: HttpClient) {
    if(this.isLoggedIn$.value){
      this.me()
    }
  }

  login(login: Partial<{ login: string | null, password: string | null, rememberMe: boolean | null }>) {
    of("a").pipe(
      delay(200),
      tap(() => this.isLoggedIn$.next(true)),
      tap(() => localStorage.setItem("isLoggedIn", "true")),
      tap(() => this.router.navigateByUrl("")),
      tap(() => this.me())
    ).subscribe();
  }

  private me() {
    of(participant1).subscribe((user) => this.loggedUser$.next(user))
    // return this.httpClient.get<Participant>("/api/me");
  }

  logout() {
    this.isLoggedIn$.next(false);
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
    this.loggedUser$.next(null)
  }
}
