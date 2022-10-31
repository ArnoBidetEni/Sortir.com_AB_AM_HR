import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Excursion } from 'src/app/shared/interfaces/excursion';

@Component({
  selector: 'app-excursion-add-dialog',
  templateUrl: './excursion-add-dialog.component.html',
  styleUrls: ['./excursion-add-dialog.component.scss']
})
export class ExcursionAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcursionAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Excursion | null
  ) { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
