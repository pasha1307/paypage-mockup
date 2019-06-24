import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/';
import {MatProgressSpinnerModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
// import { FusionChartsModule } from 'angular-fusioncharts';
// import FusionCharts from 'fusioncharts/core';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import Column2D from 'fusioncharts/viz/column2d';
import {ChartsModule} from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MyDoughChartComponent } from './my-dough-chart/my-dough-chart.component';
import { DoughnutTplComponent } from './doughnut-tpl/doughnut-tpl.component';
import { BarTplComponent } from './bar-tpl/bar-tpl.component';
import { SingleAccountComponent } from './single-account/single-account.component';
import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import { DashComponent } from './dash/dash.component';

FusionChartsModule.fcRoot(FusionCharts, Column2D);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentsComponent,
    MyLineChartComponent,
    MainNavComponent,
    MyDoughChartComponent,
    DoughnutTplComponent,
    BarTplComponent,
    SingleAccountComponent,
    ServiceDialogComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FusionChartsModule,
    HttpClientModule,
    ChartsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDialogModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ServiceDialogComponent]
})
export class AppModule { }
