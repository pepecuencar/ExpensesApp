import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestapiService {

  data: {};
  apiUrl = 'http://52.207.124.67';

  constructor(public http: Http) {
  }

  getExpenses() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/expenses')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  
  refreshExpenses() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/expenses')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  
  saveExpense(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/expenses', data)
        .subscribe(res => { resolve(res);
        alert("Expense Saved");}, (err) => {reject(err);
        });
    });
    
  }
}