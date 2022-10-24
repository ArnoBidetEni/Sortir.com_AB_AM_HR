import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ProfileModule { }
