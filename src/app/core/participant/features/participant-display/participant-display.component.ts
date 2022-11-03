import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/shared/interfaces/participant';
import { ParticipantService } from 'src/app/core/participant/data-access/participant.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ParticipantAddComponent } from '../../ui/participant-add/participant-add.component';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-participant-display',
  templateUrl: './participant-display.component.html',
  styleUrls: ['./participant-display.component.scss']
})
export class ParticipantDisplayComponent implements OnInit {
  @ViewChild(ParticipantAddComponent, { static: true }) participantAddComponent!: ParticipantAddComponent;
  Math = Math;
  file: File | null = null;
  participantId$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  participant$: Observable<Participant> = this.participantId$.pipe(
    switchMap(id => this.participantService.getParticipant(id))
  );

  constructor(private participantService: ParticipantService, public loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.participantId$.next(parseInt(this.route.snapshot.paramMap.get('participantId') ?? "-1"));
    this.setFormEnabled(false);
  }
  onChange({ target }: Event) {
    let files = (target as HTMLInputElement).files
    if (!files) return;

    if (files[0].size > 2097152) {
      alert("File is too big!");
      return;
    };
    this.file = files[0];
    this.participantService.uploadImage(this.loginService.loggedUser$.value?.participantId ?? -1, this.file).subscribe(el=>this.participantId$.next(this.participantId$.value))
  }

  cancel() {
    this.setFormEnabled(false);
    this.participantAddComponent?.reset();
    this.file = null;
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
