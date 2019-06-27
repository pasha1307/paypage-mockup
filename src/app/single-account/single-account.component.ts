import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ServiceDialogComponent} from '../service-dialog/service-dialog.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-account',
  templateUrl: './single-account.component.html',
  styleUrls: ['./single-account.component.scss']
})
export class SingleAccountComponent implements OnInit {
  @Input() totalAccount;
  @Input() accServices;
  @Input() accApps;
  @Input() accountName;
  id;
  acc;
  total;
 @Input() serviceData: any[] = [
    [],
  ];
 @Input() serviceLabels: any[] = [];
  totalSum;
 @Input() applData: any[] = [
    [],
  ];
 @Input() applLabels: any[] = [];

 @Input() locationData: any[] = [
    [],
  ];
  @Input () locationLabels: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));
  }

  ngOnInit() {
    this.route
  }
  openDialog(el) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '700px';
    dialogConfig.minHeight = '500px';
    dialogConfig.data = {
      sel: el,
      id: 1,
      title: 'Service No:..',
      sData: this.serviceData
    };
    this.dialog.open(ServiceDialogComponent, dialogConfig);
  }

}
