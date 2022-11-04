import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/core/participant/data-access/participant.service';
import { Participant } from 'src/app/shared/interfaces/participant';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ParticipantAddComponent } from 'src/app/core/participant/ui/participant-add/participant-add.component';
import { ParticipantAddDialogComponent } from 'src/app/core/participant/features/participant-add-dialog/participant-add-dialog.component';
import { CsvUploadService } from '../../data-access/csv-upload.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  file: File | null = null;
  reloadParticipant: BehaviorSubject<null> = new BehaviorSubject<null>(null);
  participants$ = this.reloadParticipant.pipe(switchMap(() => this.participantService.getParticipants().pipe(map(val => val.filter(el => !el.administrator)))));

  constructor(private participantService: ParticipantService, private matDialog: MatDialog, private csvUploadService : CsvUploadService) { }

  ngOnInit(): void {
  }

  onChange({ target }: Event) {
    let files = (target as HTMLInputElement).files
    if (!files) return;

    if (files[0].size > 2097152) {
      alert("File is too big!");
      return;
    };
    this.csvUploadService.uploadCsv(files[0]).subscribe();
  }

  editUser(participant: Participant) {
    this.matDialog.open(ParticipantAddDialogComponent, {
      data: participant
    })
  }

  onToggleUserActive(participant: Participant) {
    this.participantService.updateParticipant(participant.participantId ?? -1, participant).subscribe();
  }

  removeUser(participant: Participant) {
    if (participant.participantId)
      this.participantService.deleteParticipant(participant.participantId).subscribe(() => this.reloadParticipant.next(null));
  }
}
