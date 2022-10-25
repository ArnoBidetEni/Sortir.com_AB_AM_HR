import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private localstorageKeys = {
    isLoggedIn: "isLoggedIn"
  }
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(coerceBooleanProperty(localStorage.getItem(this.localstorageKeys.isLoggedIn)));
  get isLoggedIn$(): BehaviorSubject<boolean> {
    return this.loggedIn$;
  }

  constructor(private router: Router) {
  }

  login(login: Partial<{ login: string | null, password: string | null, rememberMe: boolean | null }>) {

    of("a").pipe(
      delay(200),
      tap(() => this.loggedIn$.next(true)),
      tap(() => localStorage.setItem("isLoggedIn", "true")),
      tap(() => this.router.navigateByUrl(""))
    ).subscribe();
  }

  logout() {
    this.loggedIn$.next(false);
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  }
}
