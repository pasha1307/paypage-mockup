import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-single-account',
  templateUrl: './single-account.component.html',
  styleUrls: ['./single-account.component.scss']
})
export class SingleAccountComponent implements OnInit {
id;
acc;
total;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.acc = this.route.snapshot.paramMap.get('name');
    this.total = this.route.snapshot.paramMap.get('total');
    console.log('IS OP?', this.total)
  }

}
