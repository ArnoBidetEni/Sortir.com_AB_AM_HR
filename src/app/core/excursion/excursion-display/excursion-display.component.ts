import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, of, fromEvent } from 'rxjs';
import { switchMap, startWith, filter } from 'rxjs/operators';
import { campus } from 'src/app/shared/interfaces/campus';


import { Excursion } from 'src/app/shared/interfaces/excursion';
import { Participant } from 'src/app/shared/interfaces/participant';
import { Status, StatusI } from 'src/app/shared/interfaces/status';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';
import { ExcursionService } from 'src/app/shared/services/excursion.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-excursion-display',
  templateUrl: './excursion-display.component.html',
  styleUrls: ['./excursion-display.component.scss']
})
export class ExcursionDisplayComponent implements OnInit {

  todayDate = Date.now();

  constructor(private excursionService: ExcursionService, public breakpointService: BreakpointService, public loginService: LoginService) { }

  get controls() {
    return this.filterGroup.controls;
  }

  campus = campus;

  filterGroup = new FormGroup({
    campus: new FormControl(campus[0]),
    search: new FormControl(''),
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
    excursionOrganisator: new FormControl<boolean>(true),
    excursionSubscribed: new FormControl<boolean>(true),
    excursionNotSubscribed: new FormControl<boolean>(true),
    excursionPassed: new FormControl<boolean>(false)
  });

  filteredList$: Observable<Excursion[]> = combineLatest([
    this.excursionService.getExcursions(),
    this.filterGroup.valueChanges.pipe(startWith(this.filterGroup.value)),
    this.loginService.loggedUser$
  ]).pipe(
    switchMap(([list, formChange, loggedUser]) =>
      of(list
        // If in creation but the user is the organisator, or if not in creation
        .filter(excursion => (this.isInCreation(excursion.status) && this.isOrganisator(excursion, loggedUser!) || !this.isInCreation(excursion.status)))
        .filter(excursion => excursion.campus.campusId === formChange?.campus?.campusId)
        .filter(excursion => new RegExp(".*" + (formChange?.search ?? "") + ".*").test(excursion.name))
        .filter(excursion => excursion.startTime >= formChange?.startDate!)
        .filter(excursion => excursion.limitDateRegistration <= (formChange?.endDate ?? new Date(3000, 1)))
        .filter(excursion => (excursion.organisator.participantId !== this.loginService.loggedUser$.value?.participantId) || formChange.excursionOrganisator)
        .filter(excursion => !this.isSubscribedToExcursion(loggedUser, excursion) || formChange.excursionSubscribed)
        .filter(excursion => this.isSubscribedToExcursion(loggedUser, excursion) || formChange.excursionNotSubscribed)
        .filter(excursion => (excursion.startTime <= new Date(Date.now())) || !formChange.excursionPassed)
      )
    )
  );



  ngOnInit(): void {
  }

  private isSubscribedToExcursion(user: Participant | null, excursion: Excursion): boolean {
    return excursion.participants.some(el => el.participantId === user?.participantId)
  }


  private isOrganisator(excursion: Excursion, user: Participant) {
    return excursion.organisator.participantId === user.participantId
  }

  private isInCreation(status: StatusI) {
    return status.statusId === Status.IN_CREATION.statusId;
  }
}
