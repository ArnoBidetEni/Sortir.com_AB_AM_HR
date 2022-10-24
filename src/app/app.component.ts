import { Component } from '@angular/core';
import { BreakpointService } from './shared/services/breakpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  constructor(public breakpointService: BreakpointService){}
  navLinks : {link:string,label:string}[] = [
    {
      link:"home",
      label:"Accueil"
    },
    {
      link:"villes",
      label:"Villes"
    },{
      link:"campus",
      label:"Campus"
    },{
      link:"profile",
      label:"Mon profil"
    }
  ]
}