import { Component } from '@angular/core';
import { BreakpointService } from './shared/services/breakpoint.service';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public breakpointService: BreakpointService, public loginService: LoginService) { }
  navLinks: { link: string, label: string }[] = [{
    link: "/",
    label: "Accueil"
  }, {
    link: "/city/list",
    label: "Villes"
  }, {
    link: "/campus/list",
    label: "Campus"
  }, {
    link: '/participant/'+this.loginService.loggedUser$.value?.participantId,
    label: "Mon profil"
  }
  ]
}
