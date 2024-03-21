import { CustomersService } from './../../services/customers.service';
import { Component } from '@angular/core';
import { CustomerDetails } from '../../interfaces/CustomerDetails';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private customerService: CustomersService, private toastr: ToastrService) {}

  searchByAadhar(): void {
    this.submitBtnClicked = true;
    if(!this.isValidAddhar()) return;
    
    this.isLoading = true;
    this.customerService.getCustomerByAadharNo(this.aadharNo).subscribe(
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
          this.toastr.error(err.message);
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
