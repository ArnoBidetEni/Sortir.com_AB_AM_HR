import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

import { Excursion } from 'src/app/shared/interfaces/excursion';
import { Participant } from 'src/app/shared/interfaces/participant';
import { Status, StatusI } from 'src/app/shared/interfaces/status';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';
import { ExcursionService } from 'src/app/core/excursion/data-access/excursion.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ExcursionFilterComponent } from '../../ui/excursion-filter/excursion-filter.component';
import { ExcursionAddDialogComponent } from '../excursion-add-dialog/excursion-add-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-excursion-list',
  templateUrl: './excursion-list.component.html',
  styleUrls: ['./excursion-list.component.scss']
})
export class ExcursionListComponent implements OnInit {
  @ViewChild(ExcursionFilterComponent, { static: true }) excursionsFilterComponent!: ExcursionFilterComponent;

  todayDate = Date.now();

  constructor(private excursionService: ExcursionService, public breakpointService: BreakpointService, public loginService: LoginService, public dialog: MatDialog) { }


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
          .filter(excursion => formChange?.afterDate ? new Date(excursion.startTime).getTime()>= formChange?.afterDate.getTime() : true)
          .filter(excursion => new Date(excursion.startTime).getTime() <= (formChange?.beforeDate ?? new Date(3000, 1)).getTime())
          .filter(excursion => (excursion.organisator.participantId !== this.loginService.loggedUser$.value?.participantId) || formChange.excursionOrganisator)
          .filter(excursion => !this.isSubscribedToExcursion(loggedUser, excursion) || formChange.excursionSubscribed)
          .filter(excursion => this.isSubscribedToExcursion(loggedUser, excursion) || formChange.excursionNotSubscribed)
          .filter(excursion => excursion.status.statusId != Status.PASSED.statusId || formChange.excursionPassed)
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

  addOrUpdate(city: Excursion | null) {
    this.dialog.open(ExcursionAddDialogComponent, {
      data: city
    });
  }
}
