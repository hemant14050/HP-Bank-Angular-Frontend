import { Component } from '@angular/core';
import { TransactionFormModel } from '../../interfaces/Transaction';
import { TrasactionsService } from '../../services/trasactions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit-amt',
  templateUrl: './deposit-amt.component.html',
  styleUrl: './deposit-amt.component.css'
})
export class DepositAmtComponent {
  isLoading:boolean = false;

  constructor(private transactionService: TrasactionsService, private toastr:ToastrService) {}

  formSubmitHandler(transactionFormData:TransactionFormModel): void {
    // console.log("Deposit from: ", transactionFormData);
    this.isLoading = true;
    this.transactionService.makeTransaction(transactionFormData).subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.toastr.success(data.message);
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
