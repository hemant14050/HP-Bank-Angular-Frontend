import { Component, ViewChild } from '@angular/core';
import { TransactionFormModel } from '../../interfaces/Transaction';
import { TrasactionsService } from '../../services/trasactions.service';
import { MyModalComponent } from '../../../../shared/components/my-modal/my-modal.component';

@Component({
  selector: 'app-withdraw-amt',
  templateUrl: './withdraw-amt.component.html',
  styleUrl: './withdraw-amt.component.css'
})
export class WithdrawAmtComponent {
  isLoading:boolean = false;
  modalTitle!:string;
  modalMessage!:string;
  @ViewChild(MyModalComponent) myModal!:MyModalComponent;

  constructor(private transactionService: TrasactionsService) {}
  
  formSubmitHandler(transactionFormData:TransactionFormModel): void {
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
    // console.log("Withdraw from: ", transactionFormData);
    // setTimeout(()=> {
    //   this.isLoading = false;
    // }, 3000);
  }

}
