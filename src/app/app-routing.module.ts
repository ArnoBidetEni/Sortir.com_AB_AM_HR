import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './core/admin/features/admin-dashboard/admin-dashboard.component';
import { CampusesComponent } from './core/campus/features/campus-list/campus-list.component';
import { CityListComponent } from './core/city/features/city-list/city-list.component';
import { ExcursionDisplayComponent } from './core/excursion/features/excursion-display/excursion-display.component';
import { ExcursionListComponent } from './core/excursion/features/excursion-list/excursion-list.component';
import { LoginComponent } from './core/participant/features/login/login.component';
import { ParticipantDisplayComponent } from './core/participant/features/participant-display/participant-display.component';
import { RegisterComponent } from './core/participant/features/register/register.component';
import { AdminGuard } from './shared/guards/admin.guard';
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
      { path: "list", component: ExcursionListComponent, pathMatch: "full" },
      { path: ":excursionId", component: ExcursionDisplayComponent, pathMatch: "full", canActivate: [LoginGuard] }
    ]
  },

  { path: "city/list", component: CityListComponent, canActivate: [LoginGuard] },
  { path: "campus/list", component: CampusesComponent, canActivate: [LoginGuard] },
  { path: "admin",  component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: "", redirectTo: "excursion/list", pathMatch:"full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
