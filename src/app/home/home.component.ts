import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/accounts.json').subscribe(res => console.log('Any Respons', res))
  }

}
