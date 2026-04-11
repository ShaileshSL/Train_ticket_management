import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { BookingManagementComponent } from './pages/booking-management/booking-management.component';
import { TrainManagementComponent } from './pages/train-management/train-management.component';
import { AdminTrainManagementComponent } from './pages/admin-train-management/admin-train-management.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'bookings', component: BookingManagementComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'user' } },
  { path: 'trains', component: TrainManagementComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'user' } },
  { path: 'admin-trains', component: AdminTrainManagementComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
