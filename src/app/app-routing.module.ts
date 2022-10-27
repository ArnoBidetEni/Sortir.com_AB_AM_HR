import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './core/campus/campus.component';
import { LoginComponent } from './core/profile/login/login.component';
import { ProfileDisplayComponent } from './core/profile/profile-display/profile-display.component';
import { RegisterComponent } from './core/profile/register/register.component';
import { ExcursionDisplayComponent } from './core/excursion/excursion-display/excursion-display.component';
import { VillesComponent } from './core/villes/villes.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  { path: "", component: ExcursionDisplayComponent, pathMatch: "full", canActivate: [LoginGuard] },
  { path: "villes", component: VillesComponent, canActivate: [LoginGuard] },
  { path: "campus", component: CampusComponent, canActivate: [LoginGuard] },
  {
    path: "profile", children: [
      { path: ":participantId", component: ProfileDisplayComponent, pathMatch: "full", canActivate: [LoginGuard] },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent, canActivate: [LoginGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
