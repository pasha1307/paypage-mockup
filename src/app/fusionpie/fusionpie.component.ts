import { Component, OnInit } from '@angular/core';
const data = {
  chart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Apache",
      value: "32647479"
    },
    {
      label: "Microsoft",
      value: "22100932"
    },
    {
      label: "Zeus",
      value: "14376"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};
@Component({
  selector: 'app-fusionpie',
  templateUrl: './fusionpie.component.html',
  styleUrls: ['./fusionpie.component.scss']
})
export class FusionpieComponent implements OnInit {
  width = 600;
  height = 400;
  type = "pie2d";
  dataFormat = "json";
  dataSource = data;
  constructor() { }

  ngOnInit() {
  }

}
