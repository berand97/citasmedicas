import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing';


import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoreModule } from '@core/core.module';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AppoinmentForTodayComponent } from './components/appoinment-for-today/appoinment-for-today.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    StatisticsComponent,
    SettingsComponent,
    UsersComponent,
    CreateAppointmentComponent,
    PanelComponent,
    AppoinmentForTodayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
