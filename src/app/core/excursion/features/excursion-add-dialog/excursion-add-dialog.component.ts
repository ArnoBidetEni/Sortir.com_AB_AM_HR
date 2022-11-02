import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Excursion } from 'src/app/shared/interfaces/excursion';
import { ExcursionService } from '../../data-access/excursion.service';
import { ExcursionAddComponent } from '../../ui/excursion-add/excursion-add.component';

@Component({
  selector: 'app-excursion-add-dialog',
  templateUrl: './excursion-add-dialog.component.html',
  styleUrls: ['./excursion-add-dialog.component.scss']
})
export class ExcursionAddDialogComponent implements OnInit {
  @ViewChild(ExcursionAddComponent) excursionAddComponent!: ExcursionAddComponent;
  isUpdating: boolean = false;
  constructor(
    private excursionService : ExcursionService,
    public dialogRef: MatDialogRef<ExcursionAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Excursion | null
  ) {
    this.isUpdating = !!this.data
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }
  onValidate() {
    let excursion: Excursion = {
      name: this.excursionAddComponent.form!.value.name!,
      campus: this.excursionAddComponent.form!.value.campus!,
      duration: this.excursionAddComponent.form!.value.duration!,
      excursionData: this.excursionAddComponent.form!.value.excursionData!,
      excursionPlace: this.excursionAddComponent.form!.value.excursionPlace!,
      limitDateRegistration: this.excursionAddComponent.form!.value.limitDateRegistration!,
      maxRegistrationNumber: this.excursionAddComponent.form!.value.maxRegistrationNumber!,
      organisator: this.excursionAddComponent.form!.value.organisator!,
      participants: this.excursionAddComponent.form!.value.participants!,
      startTime: this.excursionAddComponent.form!.value.startTime!,
      status: this.excursionAddComponent.form!.value.status!,
    };
    if (this.isUpdating)
      this.excursionService.updateExcursion(this.data!.excursionId!, excursion).subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => console.error(error)
      })
    else
      this.excursionService.createExcursion(excursion).subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => console.error(error)
      });
  }
}
