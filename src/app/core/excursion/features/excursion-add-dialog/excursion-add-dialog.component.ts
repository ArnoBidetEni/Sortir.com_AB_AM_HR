import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Excursion } from 'src/app/shared/interfaces/excursion';
import { ExcursionService } from '../../data-access/excursion.service';
import { ExcursionAddComponent } from '../../ui/excursion-add/excursion-add.component';
import { ExcursionAddForm } from '../../utils/excursion-add.form';

@Component({
  selector: 'app-excursion-add-dialog',
  templateUrl: './excursion-add-dialog.component.html',
  styleUrls: ['./excursion-add-dialog.component.scss']
})
export class ExcursionAddDialogComponent implements OnInit {
  @ViewChild("excursionForm") excursionForm!: ExcursionAddComponent;
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
      name: this.excursionForm.form!.value.name!,
      campus: this.excursionForm.form!.value.campus!,
      duration: this.excursionForm.form!.value.duration!,
      excursionData: this.excursionForm.form!.value.excursionData!,
      excursionPlace: this.excursionForm.form!.value.excursionPlace!,
      limitDateRegistration: this.excursionForm.form!.value.limitDateRegistration!,
      maxRegistrationNumber: this.excursionForm.form!.value.maxRegistrationNumber!,
      organisator: this.excursionForm.form!.value.organisator!,
      participants: this.excursionForm.form!.value.participants!,
      startTime: this.excursionForm.form!.value.startTime!,
      status: this.excursionForm.form!.value.status!,
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
