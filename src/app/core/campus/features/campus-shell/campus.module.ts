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
import { CampusesComponent } from '../campus-list/campus-list.component';
import { CampusFilterComponent } from '../../ui/campus-filter/campus-filter.component';
import { CampusTableComponent } from '../../ui/campus-table/campus-table.component';
import { CampusAddDialogComponent } from '../campus-add-dialog/campus-add-dialog.component';
import { CampusAddComponent } from '../../ui/campus-add/campus-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    CampusesComponent,
    CampusFilterComponent,
    CampusTableComponent,
    CampusAddDialogComponent,
    CampusAddComponent
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
    RouterModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: []
})
export class CampusModule { }
