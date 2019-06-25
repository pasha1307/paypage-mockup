import { Component, OnInit } from '@angular/core';
const data = {

  chart: {
    caption: "Yearly Energy Production Rate",
    subcaption: " Top 5 Developed Countries",
    numbersuffix: " TWh",
    showsum: "1",
    plottooltext:
      "$label produces <b>$dataValue</b> of energy from $seriesName",
    theme: "fusion",
    drawcrossline: "1",
    bgColor: "#B7295A",
    borderColor: "#6EA204",
    plotGradientColor: "#B7295A",
    canvasBgColor: "#00447C",
    usePlotGradientColor: 0,
    showcanvasborder: 0,
    paletteColors: '#B7295A,#1aaf5d,#00447C'
  },
  categories: [
    {
      category: [
        {
          label: "Canada"
        },
        {
          label: "China"
        },
        {
          label: "Russia"
        },
        {
          label: "Australia"
        },
        {
          label: "United States",
          color: "red"
        },
        {
          label: "France"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Coal",
      data: [
        {
          value: "400"
        },
        {
          value: "830",
          bgColor: "red",
        },
        {
          value: "500"
        },
        {
          value: "420"
        },
        {
          value: "790"
        },
        {
          value: "380"
        }
      ]
    },
    {
      seriesname: "Hydro",
      data: [
        {
          value: "350"
        },
        {
          value: "620"
        },
        {
          value: "410"
        },
        {
          value: "370"
        },
        {
          value: "720"
        },
        {
          value: "310"
        }
      ]
    },
    {
      seriesname: "Nuclear",
      data: [
        {
          value: "210"
        },
        {
          value: "400"
        },
        {
          value: "450"
        },
        {
          value: "180"
        },
        {
          value: "570"
        },
        {
          value: "270"
        }
      ]
    },
    {
      seriesname: "Gas",
      data: [
        {
          value: "180"
        },
        {
          value: "330"
        },
        {
          value: "230"
        },
        {
          value: "160"
        },
        {
          value: "440"
        },
        {
          value: "350"
        }
      ]
    },
    {
      seriesname: "Oil",
      data: [
        {
          value: "60"
        },
        {
          value: "200"
        },
        {
          value: "200"
        },
        {
          value: "50"
        },
        {
          value: "230"
        },
        {
          value: "150"
        }
      ]
    }
  ]
};
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  width = 600;
  height = 400;
  type = "stackedcolumn2d";
  dataFormat = "json";
  dataSource = data;
  constructor() { }

  ngOnInit() {
  }

}
