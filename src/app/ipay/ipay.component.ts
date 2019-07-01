import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as FusionCharts from 'fusioncharts';
import {data} from '../data-mock/data';
import {schema} from '../data-mock/schema';

@Component({
  selector: 'app-ipay',
  templateUrl: './ipay.component.html',
  styleUrls: ['./ipay.component.scss']
})
export class IpayComponent implements OnInit {
  isHandset$: Observable<any>;
  baseData = data;
  dataSource: any;
  type: string;
  width: string;
  height: string;

  constructor() {
    this.type = 'timeseries';
    this.width = '800';
    this.height = '500';
    this.dataSource = {
      data,
      yAxis: {
        plot: [{value: 'Sales'}]
      },
      caption: {
        text: 'Text goes in Caption'
      }
    };
    this.fetchData();
  }

  ngOnInit() {
  }

  fetchData() {
    const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
    this.dataSource.data = fusionTable;
    // this.dataSource.data.then(res => console.log('RSP', res))
  }
}
