import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VillesComponent } from './core/villes/villes.component';
import { CampusComponent } from './core/campus/campus.component';
import { ExcursionModule } from './core/excursion/features/excursion-shell/excursion.module';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantModule } from './core/participant/features/participant-shell/participant.module';

@NgModule({
  declarations: [
    AppComponent,
    VillesComponent,
    CampusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ParticipantModule,
    ExcursionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
