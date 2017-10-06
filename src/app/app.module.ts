import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewExpensePage } from '../pages/newexpense/newexpense';
import { ExpenseListPage } from '../pages/expenselist/expenselist';
import { TabsPage } from '../pages/tabs/tabs';
import { RestapiService } from '../providers/restapi-service';

@NgModule({
  declarations: [
   MyApp,
   NewExpensePage,
   ExpenseListPage,
   TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewExpensePage,
    ExpenseListPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RestapiService]
})
export class AppModule {}
