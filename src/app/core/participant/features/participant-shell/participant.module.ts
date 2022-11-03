import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ParticipantDisplayComponent } from '../participant-display/participant-display.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { ParticipantAddComponent } from '../../ui/participant-add/participant-add.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ParticipantTableComponent } from '../../ui/participant-table/participant-table.component';
import { ParticipantAddDialogComponent } from '../participant-add-dialog/participant-add-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ParticipantDisplayComponent,
    ParticipantAddComponent,
    ParticipantTableComponent,
    ParticipantAddDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
    MatSelectModule,
    MatOptionModule,
    NgxSkeletonLoaderModule,
    MatTableModule
  ],
  exports:[
    ParticipantTableComponent
  ],
  providers: [],
  bootstrap: []
})
export class ParticipantModule { }
