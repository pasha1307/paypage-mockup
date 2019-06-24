import {Component, Input, OnInit} from '@angular/core';
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
  @Input() public barChartLabels: Label[] = ['Previous', 'This Month', 'Estimated'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColor: Color[] = [
    {
      backgroundColor: 'orange',
    },
  ];
  @Input() public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
  }

}
