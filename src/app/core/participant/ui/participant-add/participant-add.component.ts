import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/shared/interfaces/participant';
import { ParticipantAddForm, getParticipantAddForm } from '../../utils/participant-add.form';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CampusService } from 'src/app/core/campus/data-access/campus.service';
@Component({
  selector: 'app-participant-add[participant]',
  templateUrl: './participant-add.component.html',
  styleUrls: ['./participant-add.component.scss']
})
export class ParticipantAddComponent implements OnInit {

  @Input('participant')
  set participant(participant: Participant | null) {
    this.receivedParticipant = participant;
    this.reset();
  };

  receivedParticipant : Participant | null = null;

  form: ParticipantAddForm = getParticipantAddForm();
  campuses$ = this.campusService.getCampuses().pipe(switchMap(val => of(val.filter(el => el.campusId !== this.form?.value.campus?.campusId))));

  constructor(private campusService: CampusService) { }

  ngOnInit(): void { }

  reset(){
    this.form?.reset({
      campus: this.receivedParticipant?.campus ?? null,
      firstName: this.receivedParticipant?.firstName ?? null,
      lastName: this.receivedParticipant?.lastName ?? null,
      login: this.receivedParticipant?.login ?? null,
      mail: this.receivedParticipant?.mail ?? null,
      phoneNumber: this.receivedParticipant?.phoneNumber ?? null,
      active :  this.receivedParticipant?.active,
      administrator : this.receivedParticipant?.administrator,
      participantId : this.receivedParticipant?.participantId ?? null,
      password : ""
    })
  }
}
