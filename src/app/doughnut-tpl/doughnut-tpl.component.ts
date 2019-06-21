import {Component, Input, OnInit} from '@angular/core';
import { ChartType } from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-doughnut-tpl',
  templateUrl: './doughnut-tpl.component.html',
  styleUrls: ['./doughnut-tpl.component.css']
})
export class DoughnutTplComponent implements OnInit {
  @Input() dataArr: any[] = [];
  @Input() labelArr: any[] = [];
  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    {
      borderColor: ['#00447C', 'red', 'orange'],
      backgroundColor: ['#00447C', 'rgba(255,0,0,.8)', 'orange', 'olive'],
    },
  ];

  constructor() { }

  ngOnInit() {
    this.doughnutChartData = this.dataArr;
    this.doughnutChartLabels = this.labelArr;
  }

}
