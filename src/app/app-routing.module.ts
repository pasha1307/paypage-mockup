import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaymentsComponent} from './payments/payments.component';
import {SingleAccountComponent} from './single-account/single-account.component';

const routes: Routes = [
  {
    path: 'payments',
    component: PaymentsComponent

  },
  {
    path: 'payments/:id',
    component: SingleAccountComponent

  },
  { path: '',   redirectTo: '/payments', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
