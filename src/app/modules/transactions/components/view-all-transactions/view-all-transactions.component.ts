import { MyModalComponent } from '../../../../shared/components/my-modal/my-modal.component';
import { Transaction } from '../../interfaces/Transaction';
import { TrasactionsService } from './../../services/trasactions.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-all-transactions',
  templateUrl: './view-all-transactions.component.html',
  styleUrl: './view-all-transactions.component.css'
})
export class ViewAllTransactionsComponent implements OnInit {
  isLoading:boolean = false;
  transactionsList!:Array<Transaction>;
  modalTitle!:string;
  modalMessage!:string;
  @ViewChild(MyModalComponent) myModal!:MyModalComponent;

  constructor(private trasactionsService: TrasactionsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.trasactionsService.getAllTransactions().subscribe(
      (data) => {
        if(data.success) {
          this.transactionsList = data.data;
        } else {
          // window.alert(data.message);
          this.modalTitle = "Failed!";
          this.modalMessage = data.message;
          this.myModal.openModal();
        }
        this.isLoading = false;
      },
      (err) => {
        this.modalTitle = "Failed!";
        if(err?.error?.message) {
          // window.alert(err.error.message);
          this.modalMessage = err?.error?.message;
        } else {
          // window.alert(err.message);
          this.modalMessage = err?.message;
        }
        this.isLoading = false;
        this.myModal.openModal();
      }
    );
  }
}
