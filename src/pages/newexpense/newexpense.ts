import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';

@Component({
  selector: 'page-newexpense',
  templateUrl: 'newexpense.html'
})
export class NewExpensePage { 
        
    expense = {paymethod:'false', tip:'0',currency:'CZK',quantity:'0', description:'', date:'', type:'Food'};
    
    constructor(public navCtrl: NavController, public restapiService: RestapiService) {
    }
    
    saveExpense() {
    this.restapiService.saveExpense(this.expense).then((result) => {
      console.log(result);
       this.expense = {paymethod:'false', tip:'0',currency:'CZK',quantity:'0', description:'', date:'', type:'Food'};  
    }, (err) => {
      console.log(err);
    });
      }
}