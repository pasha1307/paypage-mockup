import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-my-dough-chart',
  templateUrl: './my-dough-chart.component.html',
  styleUrls: ['./my-dough-chart.component.css']
})
export class MyDoughChartComponent implements OnInit {
  legend = true;
  public doughnutChartLabels: Label[] = ['Aco 1', 'Acc 2', 'Acc 3'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    {
      borderColor: ['#00447C', 'red', 'orange'],
      backgroundColor: ['#00447C', 'rgba(255,0,0,.8)', 'orange'],
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
