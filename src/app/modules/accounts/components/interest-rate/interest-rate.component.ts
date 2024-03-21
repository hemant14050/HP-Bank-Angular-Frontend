import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { InterestRate } from '../../interfaces/InterestRate';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrl: './interest-rate.component.css'
})
export class InterestRateComponent {
  isLoading:boolean = false;
  accountTypeId:number = 0;
  interestRate!:InterestRate;

  constructor(private accountService: AccountsService, private toastr: ToastrService) {}

  submitHandler(): void {
    if(this.accountTypeId != 1 && this.accountTypeId != 2) { return; }

    this.isLoading = true;
    this.accountService.getInterestRate(this.accountTypeId).subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.interestRate = data.data;
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
}
