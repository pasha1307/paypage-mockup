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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Pie2d from 'fusioncharts/viz/pie2d';
import Doughnut2d from 'fusioncharts/viz/doughnut2d';
import StackedColumn2d from 'fusioncharts/viz/stackedColumn2d';
import {ChartsModule} from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MyDoughChartComponent } from './my-dough-chart/my-dough-chart.component';
import { DoughnutTplComponent } from './doughnut-tpl/doughnut-tpl.component';
import { BarTplComponent } from './bar-tpl/bar-tpl.component';
import { SingleAccountComponent } from './single-account/single-account.component';
import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import { DashComponent } from './dash/dash.component';
import { FusionpieComponent } from './fusionpie/fusionpie.component';
import { FdoughComponent } from './Fusion/fdough/fdough.component';
import { BarSimpleComponent } from './Fusion/bar-simple/bar-simple.component';
import { StackComponent } from './Fusion/stack/stack.component';
import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import TimeSeries from 'fusioncharts/viz/timeseries';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { DrangePipe } from './drange.pipe';
import { IpayComponent } from './ipay/ipay.component';

FusionChartsModule.fcRoot(FusionCharts, Column2D, Pie2d, Doughnut2d, StackedColumn2d, Charts, FusionTheme, TimeSeries);
// FusionCharts.addDep(TimeSeries);

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
    DashComponent,
    FusionpieComponent,
    FdoughComponent,
    BarSimpleComponent,
    StackComponent,
    DrangePipe,
    IpayComponent
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
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
    HttpClientModule,
    ChartsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDialogModule,
    FusionChartsModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ServiceDialogComponent]
})
export class AppModule { }
