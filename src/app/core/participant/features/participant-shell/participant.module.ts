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
import { ParticipantDataComponent } from '../../ui/participant-data/participant-data.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ParticipantDisplayComponent,
    ParticipantDataComponent
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
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: []
})
export class ParticipantModule { }
