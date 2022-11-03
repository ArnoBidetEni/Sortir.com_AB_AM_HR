import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/shared/interfaces/participant';
import { ParticipantService } from 'src/app/core/participant/data-access/participant.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ParticipantAddComponent } from '../../ui/participant-add/participant-add.component';

@Component({
  selector: 'app-participant-display',
  templateUrl: './participant-display.component.html',
  styleUrls: ['./participant-display.component.scss']
})
export class ParticipantDisplayComponent implements OnInit {
  @ViewChild(ParticipantAddComponent, { static: true }) participantAddComponent!: ParticipantAddComponent;

  participantId$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  participant$: Observable<Participant> = this.participantId$.pipe(
    tap(() => console.log("isTapping")),
    switchMap(id => this.participantService.getParticipant(id))
  );

  constructor(private participantService: ParticipantService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.participantId$.next(parseInt(this.route.snapshot.paramMap.get('participantId') ?? "-1"));
    this.setFormEnabled(false);
  }

  cancel() {
    this.setFormEnabled(false);
    this.participantAddComponent?.reset()
  }
  save() {

  }

  setFormEnabled(enabled: boolean) {
    if (enabled) {
      this.participantAddComponent?.form?.enable();
    } else {
      this.participantAddComponent?.form?.disable();
    }
  }
}
