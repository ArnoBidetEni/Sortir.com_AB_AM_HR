import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City } from 'src/app/shared/interfaces/city';
import { CityService } from '../../data-access/city.service';
import { CityAddComponent } from '../../ui/city-add/city-add.component';

@Component({
  selector: 'app-city-add-dialog',
  templateUrl: './city-add-dialog.component.html',
  styleUrls: ['./city-add-dialog.component.scss']
})
export class CityAddDialogComponent implements OnInit {
  @ViewChild("cityForm") cityForm!: CityAddComponent;
  isUpdating: boolean = false;
  constructor(
    private cityService: CityService,
    public dialogRef: MatDialogRef<CityAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: City | null
  ) {
    this.isUpdating = !!this.data
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onValidate() {
    let city: City = { name: this.cityForm.form!.value.name!, postCode: this.cityForm.form!.value.postCode! };
    if (this.isUpdating)
      this.cityService.updateCity(this.data!.cityId!, city).subscribe({
        next: () => this.dialogRef.close(true),
        error:(error) => console.error(error)
      });
    else
      this.cityService.createCity(city).subscribe({
        next: () => this.dialogRef.close(true),
        error:(error) => console.error(error)
      });
  }

}
