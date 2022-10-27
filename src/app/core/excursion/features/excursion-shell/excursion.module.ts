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
import { ExcursionCreateComponent } from '../excursion-create/excursion-create.component';
import { ExcursionUpdateComponent } from '../excursion-update/excursion-update.component';
import { ExcursionsDisplayComponent } from '../excursions-display/excursions-display.component';
import { ExcursionsTableComponent } from '../../ui/excursions-table/excursions-table.component';
import { RouterModule } from '@angular/router';
import { ExcursionsFilterComponent } from '../../ui/excursions-filter/excursions-filter.component';

@NgModule({
  declarations: [
    ExcursionsDisplayComponent,
    ExcursionCreateComponent,
    ExcursionUpdateComponent,
    ExcursionsTableComponent,
    ExcursionsFilterComponent
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
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ExcursionModule { }
