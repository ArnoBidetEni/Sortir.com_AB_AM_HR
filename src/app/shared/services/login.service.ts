import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, delay, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Participant } from '../interfaces/participant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly BASE_URL = environment.api_ip+environment.api_base_url;
  readonly LS_AT = "access_token";
  readonly LS_RT = "refresh_token";

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(coerceBooleanProperty(localStorage.getItem(this.LS_AT)));
  loggedUser$: BehaviorSubject<Participant | null> = new BehaviorSubject<Participant | null>(null);

  constructor(private router: Router, private httpClient: HttpClient) {
    if(this.isLoggedIn$.value){
      this.me()
    }
  }

  login(login: Partial<{ username: string | null, password: string | null, rememberMe: boolean | null }>) {
    this.httpClient.post<{token:string,refresh_token:string}>(this.BASE_URL+"/login",login).pipe(
      delay(200),
      tap(() => this.isLoggedIn$.next(true)),
      tap((val) => localStorage.setItem(this.LS_AT, val.token)),
      tap((val) => localStorage.setItem(this.LS_RT, val.refresh_token)),
      tap(() => this.router.navigateByUrl("")),
      tap(() => this.me())
    ).subscribe();
  }

  private me() {
    // of(participant1).subscribe((user) => this.loggedUser$.next(user))
    return this.httpClient.get<Participant>(this.BASE_URL+"/api/me");
  }

  logout() {
    this.isLoggedIn$.next(false);
    localStorage.removeItem(this.LS_AT);
    localStorage.removeItem(this.LS_RT);
    location.reload();
    this.loggedUser$.next(null)
  }
}
