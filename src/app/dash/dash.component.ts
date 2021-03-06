import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';

import {
  accOneServices,
  accThreeServices,
  accTwoServices,
  acOneBarData, acThreeBarData, acTwoBarData,
  allAccounts,
  allAccServicees,
  AllBarData
} from '../data-mock';
import {stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll} from '../data-stack-mocks';
import {Moment} from 'moment';
import {allDataCenters} from '../data-mock-centers';
import {Router} from '@angular/router';
import {slideInAnimation} from '../animations';
import {stackDataAccount1, stackDataAccount2, stackDataAccount3, stackDataAccountAll, stackProdCategories} from '../mock-data/data-stack-products';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  animations: [slideInAnimation]
})
export class DashComponent implements OnInit {
  sel: { startDate: Moment, endDate: Moment };
  dWidth;
  No = 0;
  optionLabel = 'All Accounts';
  isHandset$: Observable<any>;
  selected;
  monthTotal = 11750;
  monthTotalLabel = '$11750';
  dataSource;
  dataCenters = allDataCenters;
  accountsTotals = allAccounts;
  initAllAccServices = allAccServicees;
  allServiceList = [accOneServices, accTwoServices, accThreeServices, allAccServicees];
  barData;
  barAvg = [acOneBarData, acTwoBarData, acThreeBarData, AllBarData];
  stackData;
  stackDataArr = [stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll];
  stackDataProdArr = [stackDataAccount1, stackDataAccount2, stackDataAccount3, stackDataAccountAll];

  constructor(private router: Router) {
    this.barData = {
      chart: {
        caption: 'Current Month vs Previous vs Next',
        subCaption: '',
        xAxisName: 'month',
        yAxisName: '$ amount',
        numberSuffix: '',
        theme: 'fusion',
        paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
      },
      data: AllBarData
    };
    this.stackData = {
      chart: {
        caption: 'Monthly Cost',
        subcaption: ' by product and account',
        numbersuffix: '',
        showsum: '1',
        plottooltext:
          '$label <b>$dataValue</b> a month $seriesName',
        theme: 'fusion',
        drawcrossline: '1',
        // borderColor: '#6EA204',
        // plotGradientColor: '#B7295A',
        // canvasBgColor: '#00447C',
        // usePlotGradientColor: 0,
        // showcanvasborder: 0,
        paletteColors: '#00447C,#0076CE, #EE6411,#41B6E6,#B7295A,#F2AF00'
      },
      // categories: stackCategories,
      categories: stackProdCategories,
      dataset: stackDataAll
    };
  }

  ngOnInit() {
    this.dWidth = '100%';
    this.selected = this.monthTotal;
    this.dataSource = {
      chart: {
        caption: 'Relative Cost of Product',
        subcaption: 'for an account',
        showpercentvalues: '1',
        defaultcenterlabel: this.monthTotalLabel,
        aligncaptionwithcanvas: '0',
        captionpadding: '0',
        decimals: '0',
        palette: '1',
        plottooltext:
          '<b>$percentValue</b> of product <b>$label</b>',
        centerlabel: '$label - $$value',
        theme: 'fusion',
        plotHighlightEffect: 0,
        use3DLighting: 0,
        paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
      },
      data: this.initAllAccServices
    };
  }

  onAccountSelect(i) {
    this.No = i;
    this.initAllAccServices = this.allServiceList[i];
    this.optionLabel = this.accountsTotals[this.No].name;
    this.dataSource.data = this.allServiceList[i];
    this.barData.data = this.barAvg[i];
    this.stackData.dataset = this.stackDataProdArr[i];
    this.router.navigate(['/dash']);
  }

  onDataCenterSelect(i) {
    this.No = i;
    this.initAllAccServices = this.allServiceList[i];
    this.optionLabel = this.dataCenters[this.No].name;
    this.dataSource.data = this.allServiceList[i];
    this.barData.data = this.barAvg[i];
    this.stackData.dataset = this.stackDataProdArr[i];
    this.router.navigate(['/dash']);
  }
}
