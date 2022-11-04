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
  isLoading : boolean = false;
  @Input('participants')
  set participants(participants: Participant[] | null) {
    if (participants) {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<Participant>(participants);
    }else{
      this.isLoading = true;
    }
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
