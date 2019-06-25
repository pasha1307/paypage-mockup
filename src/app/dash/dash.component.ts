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
  accounts = new FormControl();
  dataSource;
  doughData;
  aList = ['One', 'Two', 'THree'];
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
    this.dataSource = {
      chart: {
        caption: "Relative Cost of Service By Total",
        subcaption: "For all users in 2017",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        palette: "1",
        plottooltext:
          "<b>$percentValue</b> of our Android users are on <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "fusion",
        plotHighlightEffect: 0,
        use3DLighting: 0,
        paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
      },
      data: [
        {
          label: "Ice Cream Sandwich",
          value: "1000"
        },
        {
          label: "Jelly Bean",
          value: "5300"
        },
        {
          label: "Kitkat",
          value: "10500"
        },
        {
          label: "Lollipop",
          value: "18900"
        },
        {
          label: "Marshmallow",
          value: "17904"
        }
      ]
    };
  }

  ngOnInit() {
    this.selected = this.monthTotal;
  }
  getLabel(i) {
    this.optionLabel = this.accountsTotals[i].name;
  }

}
