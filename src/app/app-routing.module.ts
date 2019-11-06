import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './pages/config/config.component';
import { CanAuthenticationGuard } from './service/CanAuthenticationGuard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [CanAuthenticationGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanAuthenticationGuard],
    data: { roles: ['user'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
