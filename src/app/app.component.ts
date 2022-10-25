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
    link: "home",
    label: "Accueil"
  }, {
    link: "villes",
    label: "Villes"
  }, {
    link: "campus",
    label: "Campus"
  }, {
    link: "profile",
    label: "Mon profil"
  }
  ]
}
