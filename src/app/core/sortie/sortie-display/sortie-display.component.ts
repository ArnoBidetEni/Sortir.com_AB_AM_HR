import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Excursion } from 'src/app/shared/interfaces/excursion';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';
import { ExcursionService } from 'src/app/shared/services/excursion.service';

@Component({
  selector: 'app-sortie-display',
  templateUrl: './sortie-display.component.html',
  styleUrls: ['./sortie-display.component.scss']
})
export class SortieDisplayComponent implements OnInit {

  todayDate = Date.now();
  campusList = ['Saint Herblain', 'Rennes', 'Niort', 'Chartres de Bretagne', 'La Roche sur Yon'];

  constructor(private excursionService : ExcursionService, public breakpointService : BreakpointService) { }

  filterGroup = new FormGroup({
    campus: new FormControl(this.campusList[0]),
    search: new FormControl(''),
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
    excursionOrganisator: new FormControl<boolean>(true),
    excursionSubscribed: new FormControl<boolean>(true),
    excursionNotSubscribed: new FormControl<boolean>(true),
    excursionPassed: new FormControl<boolean>(false)
  });

  filteredList$ : Observable<Excursion[]> = this.excursionService.getExcursions();

  ngOnInit(): void {
  }
}
