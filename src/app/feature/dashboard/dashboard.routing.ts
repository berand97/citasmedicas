import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppoinmentsComponent } from './pages/appoinments/appoinments.component';
import { CreateAppoinmentComponent } from './pages/create-appoinment/create-appoinment.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { MedicalCategoriesComponent } from './pages/medical-categories/medical-categories.component';
import { PanelComponent } from './pages/panel/panel.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'panel', component: PanelComponent },
      { path: 'usuarios', component: UsersComponent },
      { path: 'citas', component: AppoinmentsComponent },
      { path: 'crear-citas', component: CreateAppoinmentComponent },
      { path: 'descuentos', component: DiscountComponent },
      { path: 'categorias', component: MedicalCategoriesComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
