import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PRODUCT_DATA_1, PRODUCT_DATA_2, PRODUCT_DATA_3, PRODUCT_DATA_4, PRODUCT_DATA_5} from '../data-mocks-tble';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-single-account',
  templateUrl: './single-account.component.html',
  styleUrls: ['./single-account.component.scss']
})
export class SingleAccountComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'about', 'dc1', 'dc2', 'dc3', 'total'];
  prodId: Observable<string>;
  prodName: Observable<string>;
  prodTitle;
  productData: any[] = [PRODUCT_DATA_1, PRODUCT_DATA_2, PRODUCT_DATA_3, PRODUCT_DATA_4, PRODUCT_DATA_5];
  dataSource;
  // dataSource = new MatTableDataSource(PRODUCT_DATA);
  constructor(private route: ActivatedRoute) {
    // this.prodId = route.params.pipe(map(p => p.id));
    // this.prodName = route.params.pipe(map(p => p.label))
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // // route.data includes both `data` and `resolve`
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const myid: any = id as any - 1;
      this.prodTitle = params.get('label');
      this.dataSource = new MatTableDataSource(this.productData[myid]);
    })

    // this.prodId.subscribe(el => {
    //   this.getProductArr(el);
    // });
    // this.prodName.subscribe(el => this.prodTitle = el);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
