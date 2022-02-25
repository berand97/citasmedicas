import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component'; */


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(mod => mod.DashboardModule) },
  { path: '**', redirectTo: 'dashboard' },
  /* { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) }, */
  /* { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
