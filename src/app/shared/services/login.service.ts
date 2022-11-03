import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { first } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Participant } from '../interfaces/participant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly BASE_URL = environment.api_ip + environment.api_base_url;
  readonly LS_AT = "access_token";
  readonly LS_RT = "refresh_token";

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(coerceBooleanProperty(localStorage.getItem(this.LS_AT)));
  loggedUser$: BehaviorSubject<Participant | null> = new BehaviorSubject<Participant | null>(null)

  constructor(private router: Router, private httpClient: HttpClient) {
    this.me().pipe(first()).subscribe({
      next: el => {this.loggedUser$.next(el); console.log(this.loggedUser$.value)},
      error: () => this.isLoggedIn$.next(false)
    });
  }

  login(login: Partial<{ username: string | null, password: string | null, rememberMe: boolean | null }>) {
    this.httpClient.post<{ token: string, refresh_token: string }>(this.BASE_URL + "/login", login).pipe(
      tap(() => this.isLoggedIn$.next(true)),
      tap((val) => localStorage.setItem(this.LS_AT, val.token)),
      tap((val) => localStorage.setItem(this.LS_RT, val.refresh_token)),
      tap(() => this.router.navigateByUrl("")),
      tap(() => this.me().subscribe(el => this.loggedUser$.next(el)))
    ).subscribe();
  }

  private me(): Observable<Participant> {
    return this.httpClient.get<Participant>(this.BASE_URL + "/me").pipe(tap((val)=>console.log(val)));
  }

  logout() {
    this.isLoggedIn$.next(false);
    this.loggedUser$.next(null);
    localStorage.removeItem(this.LS_AT);
    localStorage.removeItem(this.LS_RT);
    this.router.navigateByUrl("/")
  }
}
