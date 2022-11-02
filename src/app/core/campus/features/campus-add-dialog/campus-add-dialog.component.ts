import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campus } from 'src/app/shared/interfaces/campus';
import { CampusService } from '../../data-access/campus.service';
import { CampusAddComponent } from '../../ui/campus-add/campus-add.component';

@Component({
  selector: 'app-campus-add-dialog',
  templateUrl: './campus-add-dialog.component.html',
  styleUrls: ['./campus-add-dialog.component.scss']
})
export class CampusAddDialogComponent implements OnInit {
  @ViewChild("campusForm") campusForm!: CampusAddComponent;
  isUpdating: boolean = false;
  constructor(
    private campusService: CampusService,
    public dialogRef: MatDialogRef<CampusAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Campus | null
  ) {
    this.isUpdating = !!this.data
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onValidate() {
    let campus: Campus = { name: this.campusForm.form!.value.name! };
    if (this.isUpdating)
      this.campusService.updateCampus(this.data!.campusId!, campus).subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => console.error(error)
      })
    else
      this.campusService.createCampus(campus).subscribe({
        next: () => this.dialogRef.close(true),
        error: (error) => console.error(error)
      });
  }

}
