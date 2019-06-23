import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {Color, Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-tpl',
  templateUrl: './bar-tpl.component.html',
  styleUrls: ['./bar-tpl.component.css']
})
export class BarTplComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Previous', 'This Month', 'Estimated'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColor: Color[] = [
    {
      backgroundColor: 'orange',
    },
  ];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80], label: 'Account 1' },
    { data: [28, 48, 40], label: 'Account 2' },
    { data: [28, 48, 40], label: 'Account 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
