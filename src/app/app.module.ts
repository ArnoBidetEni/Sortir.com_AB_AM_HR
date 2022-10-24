import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { VillesComponent } from './core/villes/villes.component';
import { CampusComponent } from './core/campus/campus.component';
import { CreateComponent } from './core/sortie/create/create.component';
import { DisplayComponent } from './core/sortie/display/display.component';
import { UpdateComponent } from './core/sortie/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    VillesComponent,
    CampusComponent,
    CreateComponent,
    DisplayComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
