import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './core/campus/campus.component';
import { ExcursionDisplayComponent } from './core/excursion/features/excursion-display/excursion-display.component';
import { ExcursionListComponent } from './core/excursion/features/excursion-list/excursion-list.component';
import { LoginComponent } from './core/participant/features/login/login.component';
import { ParticipantDisplayComponent } from './core/participant/features/participant-display/participant-display.component';
import { RegisterComponent } from './core/participant/features/register/register.component';
import { CityComponent } from './core/city/city.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  {
    path: "participant", children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent, canActivate: [LoginGuard] },
      { path: ":participantId", component: ParticipantDisplayComponent, pathMatch: "full", canActivate: [LoginGuard] }
    ]
  },
  {
    path: "excursion",  children: [
      { path: "", redirectTo: "list", pathMatch:"full" },
      { path: "list", component: ExcursionListComponent, pathMatch: "full", canActivate: [LoginGuard] },
      { path: ":excursionId", component: ExcursionDisplayComponent, pathMatch: "full", canActivate: [LoginGuard] }
    ]
  },

  { path: "villes", component: CityComponent, canActivate: [LoginGuard] },
  { path: "campus", component: CampusComponent, canActivate: [LoginGuard] },
  { path: "", redirectTo: "excursion/list", pathMatch:"full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
