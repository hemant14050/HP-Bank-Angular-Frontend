import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../interfaces/Account';
import { CustomerDetails } from '../../../customers/interfaces/CustomerDetails';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})
export class ViewAccountComponent {
  currCustomerData!:CustomerDetails;
  accountNo!:number;
  isLoading = false;
  submitBtnClicked:Boolean = false;

  constructor(private accountsService: AccountsService) {}

  searchByAccountNo(): void {
    this.submitBtnClicked = true;
    if(!this.accountNo) return;
    
    this.isLoading = true;
    this.accountsService.getAccountById(this.accountNo).subscribe(
      (data) => {
        if(data.success) {
          this.currCustomerData = data.data;
          console.log(data.data);
        } else {
          window.alert(data.message);
        }
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        if(err?.error?.message) {
          window.alert(err?.error?.message);
        } else {
          window.alert(err.message);
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
          this.currCustomerData.isActive = data.data.isActive;
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
