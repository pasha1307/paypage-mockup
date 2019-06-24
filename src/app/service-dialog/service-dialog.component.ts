import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChartDataSets} from 'chart.js';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.scss']
})
export class ServiceDialogComponent implements OnInit {
  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Current App/Service' }
  ];
  barsData = [
    { data: [80, 61, 76], label: 'Current, Past, and Estimated' },
    // { data: [28, 48, 40], label: 'Current' },
    // { data: [28, 48, 40], label: 'Estimated' }
    ];
  constructor(private dialogRef: MatDialogRef<ServiceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }
  ngOnInit() {
    console.log('DATA OBJ', this.data.sel)
  }
  onKoo(e) {
      console.log(e)
  }
close() {
    this.dialogRef.close('The dialog is closed');
}
}
