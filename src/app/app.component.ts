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
}
