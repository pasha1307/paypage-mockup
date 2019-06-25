import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

// const data = {
//   chart: {
//     caption: 'Market Share of Web Servers',
//     plottooltext: '<b>$percentValue</b> of web servers run on $label servers',
//     showlegend: '1',
//     showpercentvalues: '1',
//     legendposition: 'bottom',
//     usedataplotcolorforlabels: '1',
//     theme: 'fusion'
//   },
//   data: [
//     {
//       label: 'Apache',
//       value: '32647479'
//     },
//     {
//       label: 'Microsoft',
//       value: '22100932'
//     },
//     {
//       label: 'Zeus',
//       value: '14376'
//     },
//     {
//       label: 'Other',
//       value: '18674221'
//     }
//   ]
// };


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  optionLabel = 'All Accounts';
  isHandset$: Observable<any>;
  selected;
  monthTotal = 900;
  monthTotalLabel = '$900';
  accounts = new FormControl();
  dataSource;
  dataDough;
  serviceList = [{
    label: 'Service A',
    value: '1000'
  },
    {
      label: 'Service B',
      value: '5300'
    },
    {
      label: 'C Service',
      value: '10500'
    },
    {
      label: 'D-Serv',
      value: '18900'
    },
    {
      label: 'Last Service',
      value: '17904'
    }];
  accountsTotals = [
    {name: 'Acc One', total: 200},
    {name: 'Account 2', total: 280},
    {name: 'Account 3', total: 420},
    {name: 'All Accounts', total: 900}
  ];
  pieData;
// pieConfig;
// type;
// width;
// height;
// dataFormat;
  constructor() {
  }

  ngOnInit() {
    this.selected = this.monthTotal;
    this.dataSource = {
      chart: {
        caption: 'Relative Cost of Service By Total',
        subcaption: 'For all users in 2017',
        showpercentvalues: '1',
        defaultcenterlabel: this.monthTotalLabel,
        aligncaptionwithcanvas: '0',
        captionpadding: '0',
        decimals: '0',
        palette: '1',
        plottooltext:
          '<b>$percentValue</b> of our Android users are on <b>$label</b>',
        centerlabel: '$label - $$value',
        theme: 'fusion',
        plotHighlightEffect: 0,
        use3DLighting: 0,
        paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
      },
      data: this.serviceList
    };
  }

  getLabel(i) {
    this.optionLabel = this.accountsTotals[i].name;
  }

}
