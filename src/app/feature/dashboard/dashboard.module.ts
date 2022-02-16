import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing';


import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '@core/core.module';
import { UsersComponent } from './pages/users/users.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AppoinmentForTodayComponent } from './components/appoinment-for-today/appoinment-for-today.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { AppoinmentsComponent } from './pages/appoinments/appoinments.component';
import { CreateAppoinmentComponent } from './pages/create-appoinment/create-appoinment.component';
import { HealthCompanyComponent } from './pages/health-company/health-company.component';
import { MedicalCategoriesComponent } from './pages/medical-categories/medical-categories.component';
import { CreateMedicalCategorieComponent } from './components/create-medical-categorie/create-medical-categorie.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateChargeComponent } from './components/create-charge/create-charge.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    PanelComponent,
    AppoinmentForTodayComponent,
    DiscountComponent,
    AppoinmentsComponent,
    CreateAppoinmentComponent,
    MedicalCategoriesComponent,
    HealthCompanyComponent,
    MedicalCategoriesComponent,
    CreateMedicalCategorieComponent,
    CreateChargeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule,
    DashboardRoutingModule,
    BsDatepickerModule.forRoot(),

  ]
})
export class DashboardModule { }
