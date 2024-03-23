import { ToastrService } from 'ngx-toastr';
import { ITransaction } from '../../interfaces/ITransaction';
import { TrasactionsService } from './../../services/trasactions.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-all-transactions',
  templateUrl: './view-all-transactions.component.html',
  styleUrl: './view-all-transactions.component.css'
})
export class ViewAllTransactionsComponent implements OnInit {
  isLoading:boolean = false;
  transactionsList!:Array<ITransaction>;

  constructor(private trasactionsService: TrasactionsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.trasactionsService.getAllTransactions().subscribe(
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
          this.toastr.error(err.statusText);
        }
      }
    );
  }
}
