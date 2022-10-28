import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CityListComponent } from '../city-list/city-list.component';
import { CityFilterComponent } from '../../ui/city-filter/city-filter.component';
import { CityTableComponent } from '../../ui/city-table/city-table.component';
import { CityAddDialogComponent } from '../city-add-dialog/city-add-dialog.component';
import { CityAddComponent } from '../../ui/city-add/city-add.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    CityListComponent,
    CityFilterComponent,
    CityTableComponent,
    CityAddDialogComponent,
    CityAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class CityModule { }
