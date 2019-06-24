import {Injectable} from '@angular/core';
import data from './services.data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  custArr = data;
  Account1;
  Account2;
  Account3;
  totalSum;
  newSum = 0;
  accServ;
  accApp;

  constructor() {
  }

  getAccounts() {
    this.Account1 = Array.from(this.custArr)[0];
    this.Account2 = Array.from(this.custArr)[1];
    this.Account3 = Array.from(this.custArr)[2];
    return [this.Account1, this.Account2, this.Account3];
  }

  getSumApps(accN) {
    const apps = Array.from(this.custArr)[accN].Application;
    const appsUsage = apps.map(el => el.Usage.map(x => {
      const costPerDay = x.hours * 2.75;
      return costPerDay;
    }));
    return appsUsage;
  }

  getAllApps(accNo) {
    return Array.from(this.custArr)[accNo].Application;
  }

  getAllServices(accNo) {
    return Array.from(this.custArr)[accNo].Service;
  }
  getSumServ(accN) {
    const apps = Array.from(this.custArr)[accN].Service;
    const serviceUsage = apps.map(el => el.Usage.map(x => {
      const costPerDay = x.hours * 2.5;
      return costPerDay;
    }));
    return serviceUsage;
  }
}
