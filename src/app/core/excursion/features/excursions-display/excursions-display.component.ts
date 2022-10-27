import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { campus } from 'src/app/shared/interfaces/campus';


import { Excursion } from 'src/app/shared/interfaces/excursion';
import { Participant } from 'src/app/shared/interfaces/participant';
import { Status, StatusI } from 'src/app/shared/interfaces/status';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';
import { ExcursionService } from 'src/app/core/excursion/data-access/excursion.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ExcursionsFilterComponent } from '../../ui/excursions-filter/excursions-filter.component';

@Component({
  selector: 'app-excursions-display',
  templateUrl: './excursions-display.component.html',
  styleUrls: ['./excursions-display.component.scss']
})
export class ExcursionsDisplayComponent implements OnInit {
  @ViewChild(ExcursionsFilterComponent,{static:true}) excursionsFilterComponent! : ExcursionsFilterComponent;
  todayDate = Date.now();

  constructor(private excursionService: ExcursionService, public breakpointService: BreakpointService, public loginService: LoginService) { }

  campus = campus;

  filteredList$!: Observable<Excursion[]>;

  ngOnInit(): void {
    this.filteredList$ = combineLatest([
      this.excursionService.getExcursions(),
      this.excursionsFilterComponent.form!.valueChanges.pipe(startWith(this.excursionsFilterComponent.form!.value)),
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
