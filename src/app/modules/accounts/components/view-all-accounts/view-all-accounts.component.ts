import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../interfaces/Account';
import { ToastrService } from 'ngx-toastr';

const accountTableTitles:Array<String>  = [
  "Account No",
  "Customer Id",
  "Account Type",
  "Balance",
  "Is Active",
  "Action",
  "Created At"
];

@Component({
  selector: 'app-view-all-accounts',
  templateUrl: './view-all-accounts.component.html',
  styleUrl: './view-all-accounts.component.css'
})
export class ViewAllAccountsComponent implements OnInit {
  accountsList:Array<Account> = [];
  isLoading:boolean = false;
  accountTableTitles:Array<String> = accountTableTitles;

  constructor(private accountsService: AccountsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.accountsService.getAllAccounts().subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.accountsList = data.data;
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

  statusChangeHandler(accountNo:number): void {
    // console.log("Accoutn status: ", accountNo);
    this.accountsService.changeStatus(accountNo).subscribe(
      (data) => {
        // console.log("Success: ", data);
        if(data.success) {
          this.accountsList = this.accountsList.map(acc => {
            if(acc.accountNo == data.data.accountNo) {
              return data.data;
            } else {
              return acc;
            }
          });
          this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      },
      (err) => {
        // console.log("Error--here: ", err);
        if(err?.error?.message) {
          this.toastr.error(err?.error?.message);
        } else {
          this.toastr.error(err.message);
        }
      }
    );
  }
}
