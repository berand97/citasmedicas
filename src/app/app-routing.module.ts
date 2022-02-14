import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'auth', loadChildren: ()=> import('./feature/auth/auth.module').then(mod => mod.AuthModule)},
  { path: 'dashboard', loadChildren: ()=> import('./feature/dashboard/dashboard.module').then(mod => mod.DashboardModule)},
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: '**', redirectTo: '/auth'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
