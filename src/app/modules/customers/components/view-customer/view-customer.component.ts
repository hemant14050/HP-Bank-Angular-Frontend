import { CustomersService } from './../../services/customers.service';
import { Component } from '@angular/core';
import { CustomerDetails } from '../../interfaces/CustomerDetails';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {
  currCustomerData!:CustomerDetails;
  aadharNo!:string;
  aadharNoRegex = new RegExp("^[0-9]{12}$");
  isLoading = false;
  isValid = true;
  submitBtnClicked:Boolean = false;

  constructor(private customerService: CustomersService) {}

  searchByAadhar(): void {
    this.submitBtnClicked = true;
    if(!this.isValidAddhar()) return;
    
    this.isLoading = true;
    this.customerService.getCustomerByAadharNo(this.aadharNo).subscribe(
      (data) => {
        if(data.success) {
          this.currCustomerData = data.data;
          // console.log(data.data);
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

  isValidAddhar(): boolean {
    if(this.aadharNoRegex.test(this.aadharNo)) {
      this.isValid = true;
      // console.log(this.aadharNo, this.isValid);
      return true;
    }
    this.isValid = false;
    return false;
  }
}
