import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/shared/interfaces/participant';
import { ParticipantService } from 'src/app/core/participant/data-access/participant.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ParticipantAddComponent } from '../../ui/participant-add/participant-add.component';

@Component({
  selector: 'app-participant-display',
  templateUrl: './participant-display.component.html',
  styleUrls: ['./participant-display.component.scss']
})
export class ParticipantDisplayComponent implements OnInit {
  @ViewChild(ParticipantAddComponent, { static: true }) participantAddComponent!: ParticipantAddComponent;
  readonly : boolean = true;
  participantId$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  participant$: Observable<Participant | undefined> = this.participantId$.pipe(
    switchMap(id => this.participantService.getParticipant(id))
  );
  constructor(private participantService: ParticipantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.participantId$.next(parseInt(this.route.snapshot.paramMap.get('participantId') ?? "-1"));
  }

  cancel(){
    this.readonly = true;
    this.participantAddComponent.form?.reset()
  }

}
