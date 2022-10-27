import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/shared/interfaces/participant';

@Component({
  selector: 'app-participant-data[participant]',
  templateUrl: './participant-data.component.html',
  styleUrls: ['./participant-data.component.scss']
})
export class ParticipantDataComponent implements OnInit {
  @Input('participant') participant! : Participant;
  constructor() { }

  ngOnInit(): void {
  }

}
