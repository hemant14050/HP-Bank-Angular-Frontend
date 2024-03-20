import { DepositAmtComponent } from './components/deposit-amt/deposit-amt.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { ViewAllTransactionsComponent } from './components/view-all-transactions/view-all-transactions.component';
import { WithdrawAmtComponent } from './components/withdraw-amt/withdraw-amt.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';

const routes: Routes = [
  { 
    path: '', 
    component: TransactionsComponent, 
    children: [
      { path: 'view-transactions', component: ViewAllTransactionsComponent },
      { path: 'view-transactions-by-accountNo', component: ViewTransactionComponent },
      { path: 'transactions/deposit-amt', component: DepositAmtComponent },
      { path: 'transactions/withdraw-amt', component: WithdrawAmtComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
