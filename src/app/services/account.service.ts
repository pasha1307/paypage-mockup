import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
dataUrl = 'assets/accounts.json/'
  constructor(private http: HttpClient) { }
  getSingle(id) {
    return this.http.get(this.dataUrl +  id );
  }
}
