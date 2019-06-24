import {Component, OnInit} from '@angular/core';
import {MultiDataSet} from 'ng2-charts';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  toShow = true;
  granTotal;
  isHandset$;
  hR;
  hTotal;
  newR;
  acNum;
  testAllServ;
  alS;
  alP;
  account1;
  account2;
  account3;
  accTotal1;
  accTotal2;
  accTotal3;
  sumAcc1Apps;
  sumAcc2Apps;
  sumAcc3Apps;
  sumAcc1Serv;
  sumAcc2Serv;
  sumAcc3Serv;
  allAccountApps;
  allAccountServices;
  totalPay;
  allAppsPay;
  totalAppsPay;
  totalPayService;
  allServicePay;
  totalServicePay;
  accountsArr;
  accLabels: any[] = ['Acc 1', 'Acc 2', 'Acc 3'];
  averAll;
  prevAll;
  estAll;
  dataSource;
  barsData = [{ data: [65, 59, 80], label: 'Account 1' },
{ data: [28, 48, 40], label: 'Account 2' },
{ data: [28, 48, 40], label: 'Account 3' }];
  opts: any [] = [
    {id: 1, name: 'Service 1', total: 850},
    {id: 2, name: 'Service 2', total: 990},
    {id: 3, name: 'Service 3', total: 1050},
    {id: 4, name: 'Service 4', total: 800},
  ];
  accounts: any[] = [];
  serviceData: any[] = [
    [200, 420, 170, 522],
  ];
  serviceLabels: any[] = ['Service A', 'Service B', 'Service C', 'Service D'];
  totalSum;
  applData: any[] = [
    [498, 990],
  ];
  applLabels: any[] = ['Application A', 'Application B'];

  locationData: any[] = [
    [675, 522, 128, 54, 734],
  ];
  locationLabels: any[] = ['Data Center-1', 'Data Center-2', 'Data Center-3', 'Data Center-4', 'Data Center-5'];

  constructor(public dataService: AccountService) {
    this.dataSource = {
      chart: {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      // Chart Data
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    }; // end of this.dataSource
  }

  ngOnInit() {
    this.account1 = this.dataService.getAccounts()[0];
    this.account2 = this.dataService.getAccounts()[1];
    this.account3 = this.dataService.getAccounts()[2];

    // this.allAccountApps = this.dataService.getAllApps(0);
    // this.allAccountServices = this.dataService.getAllServices(0);

    this.totalPayService = this.dataService.getSumServ(0);
    this.totalPayService.map(arr => this.allServicePay = arr);
    this.sumAcc1Serv = this.allServicePay.reduce((a, b) => {
      return this.totalServicePay = a + b;
    }, 0);

    this.totalPayService = this.dataService.getSumServ(1);
    this.totalPayService.map(arr => this.allServicePay = arr);
    this.sumAcc2Serv = this.allServicePay.reduce((a, b) => {
      return this.totalServicePay = a + b;
    }, 0);
    this.totalPayService = this.dataService.getSumServ(2);
    this.totalPayService.map(arr => this.allServicePay = arr);
    this.sumAcc3Serv = this.allServicePay.reduce((a, b) => {
      return this.totalServicePay = a + b;
    }, 0);
    this.totalPay = this.dataService.getSumApps(0);
    this.totalPay.map(arr => this.allAppsPay = arr);
    this.sumAcc1Apps = this.allAppsPay.reduce((a, b) => {
      return  a + b;
    }, 0);

    const acc1 = this.dataService.getSumApps(1);
    acc1.map(arr => this.allServicePay = arr);
    this.sumAcc2Apps = this.allServicePay.reduce((a, b) => {
      return  a + b;
    }, 0);
    this.totalPay = this.dataService.getSumApps(2);
    this.totalPay.map(arr => this.allAppsPay = arr);
    this.sumAcc3Apps = this.allAppsPay.reduce((a, b) => {
      return  a + b;
    }, 0);
    this.getGran();
    this.getTotalHoursCost(2);
    this.accountsArr = [(((this.sumAcc1Serv + this.sumAcc1Apps)/12).toFixed(1)),
      (((this.sumAcc2Serv + this.sumAcc2Apps)/12).toFixed(1)),
      (((this.sumAcc3Serv + this.sumAcc3Apps)/12).toFixed(1))
    ];
    this.accounts = [
      {id: 1, name: 'Account 1', total: (((this.sumAcc1Serv + this.sumAcc1Apps)/12).toFixed(1)) },
      {id: 2, name: 'Account 2', total: (((this.sumAcc2Serv + this.sumAcc2Apps)/12).toFixed(1)) },
      {id: 3, name: 'Account 3', total: (((this.sumAcc3Serv + this.sumAcc3Apps)/12).toFixed(1)) },
    ];
  }

  getGran() {
    return this.granTotal = ((this.sumAcc1Serv + this.sumAcc2Serv + this.sumAcc3Serv + this.sumAcc1Apps + this.sumAcc2Apps + this.sumAcc3Apps) / 12).toFixed(1);
  }

  getAppsDetail(accNo) {
    this.alP = this.dataService.getAllApps(accNo);
    this.alS = this.dataService.getAllServices(accNo);
  }
  onAllShow() {
    this.toShow = true;
  }
  onSumServ(accNo) {
    this.totalPayService = this.dataService.getSumServ(accNo);
    this.totalPayService.map(arr => this.allServicePay = arr);
    const st = this.allServicePay.reduce((a, b) => {
      return a + b;
    }, 0);
    this.totalPay = this.dataService.getSumApps(accNo);
    this.totalPay.map(arr => this.allAppsPay = arr);
    const pt = this.allAppsPay.reduce((a, b) => {
      return  a + b;
    }, 0);
    this.toShow = false;
    this.acNum = accNo;
    this.getAppsDetail(accNo)
    return this.totalServicePay = ((st + pt) / 12).toFixed(1);
  }
  getTotalHoursCost(accNo) {
     this.testAllServ = this.dataService.getAllServices(accNo);
     const temp = this.testAllServ.map(el => el.Usage);
     temp.map(x => this.hR = x);
     const hArr = this.hR.map(y => {
       return this.hR = y.hours;
     });
    this.hTotal = hArr.reduce((a, b) => a + b);
    console.log('TOTAL', this.hTotal)
  }

}


// this.dataSource = {
//   chart: {
//     'caption': 'Countries With Most Oil Reserves [2017-18]',
//     'subCaption': 'In MMbbl = One Million barrels',
//     'xAxisName': 'Country',
//     'yAxisName': 'Reserves (MMbbl)',
//     'numberSuffix': 'K',
//     'theme': 'fusion',
//   },
//   // Chart Data
//   'data': [{
//     'label': 'Venezuela',
//     'value': '290'
//   }, {
//     'label': 'Saudi',
//     'value': '260'
//   }, {
//     'label': 'Canada',
//     'value': '180'
//   }, {
//     'label': 'Iran',
//     'value': '140'
//   }, {
//     'label': 'Russia',
//     'value': '115'
//   }, {
//     'label': 'UAE',
//     'value': '100'
//   }, {
//     'label': 'US',
//     'value': '30'
//   }, {
//     'label': 'China',
//     'value': '30'
//   }]
// }; // end of this.dataSource
