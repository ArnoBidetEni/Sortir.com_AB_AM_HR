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
  navLinks: { link: string, label: string, needAdmin : boolean }[] = [{
    link: "/city/list",
    label: "Villes",
    needAdmin: true
  }, {
    link: "/campus/list",
    label: "Campus",
    needAdmin: true
  }, {
    link: "/admin",
    label: "Admin",
    needAdmin: true
  }
  ]
}
