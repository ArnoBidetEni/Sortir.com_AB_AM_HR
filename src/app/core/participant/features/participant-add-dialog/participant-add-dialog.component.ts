import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participant } from 'src/app/shared/interfaces/participant';
import { ParticipantService } from '../../data-access/participant.service';
import { ParticipantAddComponent } from '../../ui/participant-add/participant-add.component';

@Component({
  selector: 'app-participant-add-dialog',
  templateUrl: './participant-add-dialog.component.html',
  styleUrls: ['./participant-add-dialog.component.scss']
})
export class ParticipantAddDialogComponent implements OnInit {
  @ViewChild(ParticipantAddComponent) participantAddComponent!: ParticipantAddComponent;
  isUpdating: boolean = false;
  constructor(
    private participantService: ParticipantService,
    public dialogRef: MatDialogRef<ParticipantAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Participant | null) { }

  ngOnInit(): void {
    this.isUpdating = !!this.data
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onValidate() {
    let participant: Partial<Participant> = {
      campus: this.participantAddComponent.form!.controls.campus.value!,
      firstName: this.participantAddComponent.form!.controls.firstName.value!,
      lastName: this.participantAddComponent.form!.controls.lastName.value!,
      login: this.participantAddComponent.form!.controls.login.value!,
      mail: this.participantAddComponent.form!.controls.mail.value!,
      participantId: this.participantAddComponent.form!.controls.participantId.value!,
      password: this.participantAddComponent.form!.controls.password.value!,
      phoneNumber: this.participantAddComponent.form!.controls.phoneNumber.value!,
      active : this.participantAddComponent.form!.controls.active.value!
    };
    if (this.isUpdating)
      this.participantService.updateParticipant(this.data!.participantId!, participant).subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => console.error(error)
      });
    else {
      participant.administrator = false;
      participant.active = true;

      this.participantService.createParticipant(participant).subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => console.error(error)
      });
    }
  }
}
