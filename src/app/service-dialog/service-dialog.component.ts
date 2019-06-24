import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.scss']
})
export class ServiceDialogComponent implements OnInit {
woo;
  constructor(private dialogRef: MatDialogRef<ServiceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }
  ngOnInit() {
    this.onKoo(this.data)
  }
  onKoo(e) {
      console.log(e)
  }
close() {
    this.dialogRef.close('The dialog is closed');
}
}
