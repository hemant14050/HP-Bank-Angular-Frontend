import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { ViewAllTransactionsComponent } from './components/view-all-transactions/view-all-transactions.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';
import { DepositAmtComponent } from './components/deposit-amt/deposit-amt.component';
import { WithdrawAmtComponent } from './components/withdraw-amt/withdraw-amt.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionsTblComponent } from './components/transactions-tbl/transactions-tbl.component';
import { FormsModule } from '@angular/forms';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    ViewAllTransactionsComponent,
    ViewTransactionComponent,
    DepositAmtComponent,
    WithdrawAmtComponent,
    TransactionsTblComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TransactionsModule { }
