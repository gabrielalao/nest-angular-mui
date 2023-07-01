import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'customer-list', component: CustomerListComponent },
      { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
    ]
  },
  { path: '',   redirectTo: '/dashboard/customer-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
