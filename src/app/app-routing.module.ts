import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './core/campus/campus.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/profile/login/login.component';
import { ProfileDisplayComponent } from './core/profile/profile-display/profile-display.component';
import { RegisterComponent } from './core/profile/register/register.component';
import { VillesComponent } from './core/villes/villes.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "villes", component: VillesComponent },
  { path: "campus", component: CampusComponent },
  {
    path: "profile", children: [
      { path: "", component: ProfileDisplayComponent, pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
