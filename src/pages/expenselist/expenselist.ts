import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';
import { NewExpensePage } from '../newexpense/newexpense';

@Component({
  selector: 'page-expenselist',
  templateUrl: 'expenselist.html'
})

export class ExpenseListPage {
  expenses: any;

  constructor(public navCtrl: NavController, public restapiService: RestapiService) {  
    this.getExpenses();
  }

   goToNewExpense(){
        this.navCtrl.push(NewExpensePage);
    }


    doRefresh(refresher) {
        this.refreshExpenses();         
        refresher.complete();
        }

    getExpenses() {
        this.restapiService.getExpenses()
        .then(data => {
          this.expenses = data;
        });
      }
    
      refreshExpenses() {
        this.restapiService.refreshExpenses()
        .then(data => {
          this.expenses = data;
            });
      }
  }
