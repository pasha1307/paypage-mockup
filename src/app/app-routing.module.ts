import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaymentsComponent} from './payments/payments.component';
import {SingleAccountComponent} from './single-account/single-account.component';
import {DashComponent} from './dash/dash.component';
import {IpayComponent} from './ipay/ipay.component';

const routes: Routes = [
  {
    path: 'dash',
    component: DashComponent,
    data: {animation: 'list'},
    children: [
      // {
      //   path: '',
      //   component: DashComponent,
      //   data: {animation: 'detail'}
      // },
      {
        path: ':id/:label',
        component: SingleAccountComponent,
        data: {animation: 'detail'}
      },
    ]

  },
  {
    path: 'ipay',
    component: IpayComponent,
    children: [
      // {
      //   path: '',
      //   component: DashComponent,
      //   data: {animation: 'detail'}
      // },
      {
        path: ':id/:label',
        component: SingleAccountComponent
      },
    ]

  },
  {
    path: 'payments',
    component: PaymentsComponent

  },
  { path: '',   redirectTo: '/dash', pathMatch: 'full' },
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
