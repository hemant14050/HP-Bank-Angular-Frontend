import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { InterestRate } from '../../interfaces/InterestRate';

@Component({
  selector: 'app-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrl: './interest-rate.component.css'
})
export class InterestRateComponent {
  isLoading:boolean = false;
  accountTypeId:number = 0;
  interestRate!:InterestRate;

  constructor(private accountService: AccountsService) {}

  submitHandler(): void {
    this.isLoading = true;
    this.accountService.getInterestRate(this.accountTypeId).subscribe(
      (data) => {
        // console.log(data);
        if(data.success) {
          this.interestRate = data.data;
        } else {
          window.alert(data.message);
        }
        this.isLoading = false;
      },
      (err) => {
        // console.log(err);
        this.isLoading = false;
        if(err?.error?.message) {
          window.alert(err?.error?.message);
        } else {
          window.alert(err?.message);
        }
      }
    );
  }
}
