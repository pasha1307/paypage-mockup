import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ipay',
  templateUrl: './ipay.component.html',
  styleUrls: ['./ipay.component.scss']
})
export class IpayComponent implements OnInit {
isHandset$: Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
