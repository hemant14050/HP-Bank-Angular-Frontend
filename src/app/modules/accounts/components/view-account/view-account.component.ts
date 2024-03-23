import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { ICustomerDetails } from '../../../customers/interfaces/ICustomerDetails';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})
export class ViewAccountComponent {
  currCustomerData!:ICustomerDetails;
  accountNo!:number;
  isLoading = false;
  submitBtnClicked:Boolean = false;

  constructor(private accountsService: AccountsService, private toastr: ToastrService) {}

  searchByAccountNo(): void {
    this.submitBtnClicked = true;
    if(!this.accountNo) return;
    
    this.isLoading = true;
    this.accountsService.getAccountById(this.accountNo).subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.currCustomerData = data.data;
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

  statusChangeHandler(accountNo:number): void {
    // console.log("Accoutn status: ", accountNo);
    this.accountsService.changeStatus(accountNo).subscribe(
      (data) => {
        // console.log("Success: ", data);
        if(data.success) {
          this.currCustomerData.isActive = data.data.isActive;
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
          this.toastr.error(err.statusText);
        }
      }
    );
  }
}
