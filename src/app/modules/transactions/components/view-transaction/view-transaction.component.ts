import { TrasactionsService } from './../../services/trasactions.service';
import { Component } from '@angular/core';
import { Transaction } from '../../interfaces/Transaction';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.css'
})
export class ViewTransactionComponent {
  isLoading:boolean = false;
  transactionsList: Array<Transaction> = [];
  accountNo!:number;
  submitBtnClicked:boolean = false;

  constructor(private trasactionsService: TrasactionsService, private toastr: ToastrService){}

  onSubmitHandler():void {
    this.submitBtnClicked = true;
    if(!this.accountNo) return;
    // console.log('Account ID : ',this.accountNo);

    this.isLoading = true;
    this.trasactionsService.getTransactionsByAccNo(this.accountNo).subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.transactionsList = data.data;
          // this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      },
      (err) => {
        // console.log("Error--here: ", err);
        this.isLoading = false;
        if(err?.error?.message) {
          this.toastr.error(err?.error?.message);
        } else {
          this.toastr.error(err.message);
        }
      }
    );
  }

}
