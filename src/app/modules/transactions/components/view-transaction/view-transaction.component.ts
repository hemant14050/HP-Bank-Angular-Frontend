import { TrasactionsService } from './../../services/trasactions.service';
import { Component, ViewChild } from '@angular/core';
import { Transaction } from '../../interfaces/Transaction';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../../../../shared/components/my-modal/my-modal.component';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.css'
})
export class ViewTransactionComponent {
  isLoading:boolean = false;
  transactionsList: Array<Transaction> = [];
  accountNo!:number;
  modalTitle!:string;
  modalMessage!:string;
  @ViewChild(MyModalComponent) myModal!:MyModalComponent;
  submitBtnClicked:boolean = false;

  constructor(private trasactionsService: TrasactionsService){}

  onSubmitHandler():void {
    this.submitBtnClicked = true;
    if(!this.accountNo) return;
    // console.log('Account ID : ',this.accountNo);

    this.isLoading = true;
    this.trasactionsService.getTransactionsByAccNo(this.accountNo).subscribe(
      (data) => {
        if(data.success) {
          this.transactionsList = data.data;
        } else {
          this.modalTitle = "Failed!";
          this.modalMessage = data.message;
          this.myModal.openModal();
        }
        this.isLoading = false;
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
