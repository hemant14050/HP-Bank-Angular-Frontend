import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../interfaces/Account';

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

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.accountsService.getAllAccounts().subscribe(
      (data) => {
        // console.log("Success: ", data);
        if(data.success) {
          this.accountsList = data.data;
        } else {
          window.alert(data.message);
        }
        this.isLoading = false;
      },
      (err) => {
        console.log("Error--here: ", err);
        if(err?.error?.message) {
          window.alert(err.error.message);
        } else {
          window.alert(err?.message);
        }
        this.isLoading = false;
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
        } else {
          window.alert(data.message);
        }
      },
      (err) => {
        // console.log("Error--here: ", err);
        if(err?.error?.message) {
          window.alert(err?.error?.message);
        } else {
          window.alert(err?.message);
        }
      }
    );
  }
}
