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
import { ExcursionListComponent } from '../excursion-list/excursion-list.component';
import { ExcursionsTableComponent } from '../../ui/excursion-table/excursion-table.component';
import { RouterModule } from '@angular/router';
import { ExcursionFilterComponent } from '../../ui/excursion-filter/excursion-filter.component';
import { ExcursionDisplayComponent } from '../excursion-display/excursion-display.component';
import { ExcursionDataComponent } from '../../ui/excursion-data/excursion-data.component';
import { ExcursionAddComponent } from '../../ui/excursion-add/excursion-add.component';
import { ExcursionAddDialogComponent } from '../excursion-add-dialog/excursion-add-dialog.component';

@NgModule({
  declarations: [
    ExcursionListComponent,
    ExcursionCreateComponent,
    ExcursionUpdateComponent,
    ExcursionsTableComponent,
    ExcursionFilterComponent,
    ExcursionDisplayComponent,
    ExcursionDataComponent,
    ExcursionAddComponent,
    ExcursionAddDialogComponent
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
