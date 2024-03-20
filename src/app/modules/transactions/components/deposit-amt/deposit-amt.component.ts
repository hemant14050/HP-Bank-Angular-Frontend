import { Component, ViewChild } from '@angular/core';
import { TransactionFormModel } from '../../interfaces/Transaction';
import { TrasactionsService } from '../../services/trasactions.service';
import { MyModalComponent } from '../../../../shared/components/my-modal/my-modal.component';

@Component({
  selector: 'app-deposit-amt',
  templateUrl: './deposit-amt.component.html',
  styleUrl: './deposit-amt.component.css'
})
export class DepositAmtComponent {
  isLoading:boolean = false;
  modalTitle!:string;
  modalMessage!:string;
  @ViewChild(MyModalComponent) myModal!:MyModalComponent;

  constructor(private transactionService: TrasactionsService) {}

  formSubmitHandler(transactionFormData:TransactionFormModel): void {
    // console.log("Deposit from: ", transactionFormData);
    this.isLoading = true;
    this.transactionService.makeTransaction(transactionFormData).subscribe(
      (data) => {
        console.log("Success: ", data);
        if(data.success) {
          this.modalTitle = "Success!";
        } else {
          this.modalTitle = "Failed!";
        }
        this.modalMessage = data.message;
        this.isLoading = false;
        this.myModal.openModal();
      },
      (err) => {
        console.log("Error--here: ", err);
        this.modalTitle = "Failed!";
        if(err.error.message) {
          this.modalMessage = err.error.message;
        } else {
          this.modalMessage = err.message;
        }
        this.isLoading = false;
        this.myModal.openModal();
      }
    );
  }

}