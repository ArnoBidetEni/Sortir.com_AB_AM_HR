import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ExcursionModule } from './core/excursion/features/excursion-shell/excursion.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParticipantModule } from './core/participant/features/participant-shell/participant.module';
import { CityModule } from './core/city/features/city-shell/city.module';
import { CampusModule } from './core/campus/features/campus-shell/campus.module';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    CityModule,
    CampusModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
