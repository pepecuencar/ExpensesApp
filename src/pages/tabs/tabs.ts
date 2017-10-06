import { Component } from '@angular/core';
import { NewExpensePage } from '../newexpense/newexpense';
import { ExpenseListPage } from '../expenselist/expenselist';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewExpensePage;
  tab2Root: any = ExpenseListPage;
  constructor() {

  }
}
