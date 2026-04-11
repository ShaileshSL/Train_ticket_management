import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { BookingManagementComponent } from './pages/booking-management/booking-management.component';
import { TrainManagementComponent } from './pages/train-management/train-management.component';
import { AdminTrainManagementComponent } from './pages/admin-train-management/admin-train-management.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    BookingManagementComponent,
    TrainManagementComponent,
    AdminTrainManagementComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
