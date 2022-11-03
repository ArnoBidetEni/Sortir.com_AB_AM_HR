import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Participant } from 'src/app/shared/interfaces/participant';

@Component({
  selector: 'app-participant-table[participants]',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.scss']
})
export class ParticipantTableComponent implements OnInit {
  dataSource!: MatTableDataSource<Participant>;

  @Input('participants')
  set participants(participants: Participant[] | null) {
    this.dataSource = new MatTableDataSource<Participant>(participants ?? []);
  };

  @Output('onUpdateClicked') onUpdateClicked : EventEmitter<Participant> = new EventEmitter<Participant>();
  @Output('onDeleteClicked') onDeleteClicked : EventEmitter<Participant> = new EventEmitter<Participant>();
  @Output('onToggleUserActive') onToggleUserActive : EventEmitter<Participant> = new EventEmitter<Participant>();
  displayedColumns: string[] = [
    'login',
    'active',
    'action'
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
