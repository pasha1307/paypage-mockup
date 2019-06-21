import {Component, OnInit} from '@angular/core';
import {MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  dataSource;
  opts: any [] = [
    {id: 1, name: 'Service 1', total: 850},
    {id: 2, name: 'Service 2', total: 990},
    {id: 3, name: 'Service 3', total: 1050},
    {id: 4, name: 'Service 4', total: 800},
  ];
  accounts: any[] = [
    {id: 1, name: 'Account 1', total: 850},
    {id: 2, name: 'Account 2', total: 990},
    {id: 3, name: 'Account 3', total: 1050}
  ];
  customData: any[] = [
    [200, 420, 170, 522],
  ];
  customLabels: any[] = ['Service A', 'Service B', 'Service C', 'Service D'];
totalSum;
  constructor() {
    this.dataSource = {
      chart: {
        'caption': 'Countries With Most Oil Reserves [2017-18]',
        'subCaption': 'In MMbbl = One Million barrels',
        'xAxisName': 'Country',
        'yAxisName': 'Reserves (MMbbl)',
        'numberSuffix': 'K',
        'theme': 'fusion',
      },
      // Chart Data
      'data': [{
        'label': 'Venezuela',
        'value': '290'
      }, {
        'label': 'Saudi',
        'value': '260'
      }, {
        'label': 'Canada',
        'value': '180'
      }, {
        'label': 'Iran',
        'value': '140'
      }, {
        'label': 'Russia',
        'value': '115'
      }, {
        'label': 'UAE',
        'value': '100'
      }, {
        'label': 'US',
        'value': '30'
      }, {
        'label': 'China',
        'value': '30'
      }]
    }; // end of this.dataSource
  }

  ngOnInit() {
    this.getTotal();
  }
getTotal() {
   this.accounts
     .map(el => el.total)
     .reduce((a, b) => {
   return this.totalSum = a + b;
    }, 0);
}
}
