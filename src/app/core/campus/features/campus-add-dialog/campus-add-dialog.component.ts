import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campus } from 'src/app/shared/interfaces/campus';

@Component({
  selector: 'app-campus-add-dialog',
  templateUrl: './campus-add-dialog.component.html',
  styleUrls: ['./campus-add-dialog.component.scss']
})
export class CampusAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CampusAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Campus | null
  ) { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
