import { Component, Input } from '@angular/core';
import { Transaction } from '../../interfaces/Transaction';

const transactionsTableTitles:Array<string> = [
  "Transaction  Id",
  "Account No",
  "Transaction Type",
  "Amount",
  "Closing Amount",
  "Created At"
];

@Component({
  selector: 'app-transactions-tbl',
  templateUrl: './transactions-tbl.component.html',
  styleUrl: './transactions-tbl.component.css'
})
export class TransactionsTblComponent {
  transactionsTableTitles:Array<string> = transactionsTableTitles;
  @Input() isLoading: boolean = false;
  @Input() transactionsList: Array<Transaction> = [];
  
}
