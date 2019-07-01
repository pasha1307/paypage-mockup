<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
=======
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as FusionCharts from 'fusioncharts';
import {data} from '../data-mock/data';
import {schema} from '../data-mock/schema';
>>>>>>> 611f7d76f9c06876807747b28429219a2aed0ccc

@Component({
  selector: 'app-ipay',
  templateUrl: './ipay.component.html',
  styleUrls: ['./ipay.component.scss']
})
export class IpayComponent implements OnInit {
<<<<<<< HEAD
isHandset$: Observable<any>;
  constructor() { }
=======
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
>>>>>>> 611f7d76f9c06876807747b28429219a2aed0ccc

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  fetchData() {
    const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
    this.dataSource.data = fusionTable;
    // this.dataSource.data.then(res => console.log('RSP', res))
  }
>>>>>>> 611f7d76f9c06876807747b28429219a2aed0ccc
}
