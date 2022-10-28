import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City } from 'src/app/shared/interfaces/city';
import { CityAddComponent } from '../../ui/city-add/city-add.component';

@Component({
  selector: 'app-city-add-dialog',
  templateUrl: './city-add-dialog.component.html',
  styleUrls: ['./city-add-dialog.component.scss']
})
export class CityAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CityAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: City | null
  ) { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
