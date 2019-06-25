import {Component, Input, OnInit} from '@angular/core';
// const data = {
//   chart: {
//     caption: "Android Distribution for our app",
//     subcaption: "For all users in 2017",
//     showpercentvalues: "1",
//     defaultcenterlabel: "Android Distribution",
//     aligncaptionwithcanvas: "0",
//     captionpadding: "0",
//     decimals: "1",
//     palette: "1",
//     plottooltext:
//       "<b>$percentValue</b> of our Android users are on <b>$label</b>",
//     centerlabel: "# Users: $value",
//     theme: "fusion",
//     plotHighlightEffect: 0,
//     use3DLighting: 0,
//     paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
//   },
//   data: [
//     {
//       label: "Ice Cream Sandwich",
//       value: "1000"
//     },
//     {
//       label: "Jelly Bean",
//       value: "5300"
//     },
//     {
//       label: "Kitkat",
//       value: "10500"
//     },
//     {
//       label: "Lollipop",
//       value: "18900"
//     },
//     {
//       label: "Marshmallow",
//       value: "17904"
//     }
//   ]
// };


@Component({
  selector: 'app-fdough',
  templateUrl: './fdough.component.html',
  styleUrls: ['./fdough.component.scss']
})
export class FdoughComponent implements OnInit {
  @Input() width = 600;
  @Input() height = 400;
  type = "doughnut2d";
  dataFormat = "json";
  @Input() dataSource = {};
  constructor() { }

  ngOnInit() {
  }

}
