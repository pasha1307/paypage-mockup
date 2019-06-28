import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaymentsComponent} from './payments/payments.component';
import {SingleAccountComponent} from './single-account/single-account.component';
import {DashComponent} from './dash/dash.component';

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
