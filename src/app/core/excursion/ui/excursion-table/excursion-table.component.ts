import { Component, OnInit, Input } from '@angular/core';
import { Excursion } from 'src/app/shared/interfaces/excursion';
import { MatTableDataSource } from '@angular/material/table';
import { Participant } from 'src/app/shared/interfaces/participant';
import { Status, StatusI } from 'src/app/shared/interfaces/status';

@Component({
  selector: 'app-excursion-table[excursions][currentParticipant]',
  templateUrl: './excursion-table.component.html',
  styles: [
    ":host{overflow:auto} th,td{padding:0 1rem !important;}"
  ]
})
export class ExcursionsTableComponent implements OnInit {

  dataSource!: MatTableDataSource<Excursion>;

  @Input('excursions')
  set excursions(excursions: Excursion[] | undefined) {
    this.dataSource = new MatTableDataSource<Excursion>(excursions);
  };


  @Input('currentParticipant') currentParticipant: Participant | null = null

  displayedColumns: string[] = [
    'name',
    'startTime',
    'limitDateRegistration',
    'subscribedParticipants',
    'status',
    'subscribed',
    'organisator',
    'actions'
  ];

  constructor() { }

  ngOnInit(): void { }

  isSubscribedToExcursion(excursion: Excursion): boolean {
    return excursion.participants.some(el => el.participantId === this.currentParticipant?.participantId)
  }
  isInCreation(status: StatusI) {
    return status.statusId === Status.IN_CREATION.statusId;
  }
  isOnGoing(status: StatusI) {
    return status.statusId === Status.ON_GOING.statusId;
  }
  isPassed(status: StatusI){
    return status.statusId === Status.PASSED.statusId;
  }
  isClosed(status: StatusI){
    return status.statusId === Status.CLOSED.statusId;
  }
  isOrganisator(excursion: Excursion, user: Participant | null) {
    return excursion.organisator.participantId === user?.participantId
  }
}
