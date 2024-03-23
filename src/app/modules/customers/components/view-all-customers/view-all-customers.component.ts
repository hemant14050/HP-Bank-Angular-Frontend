import { ICustomerDetails } from '../../interfaces/ICustomerDetails';
import { CustomersService } from './../../services/customers.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomerInputFields } from '../../interfaces/ICustomer';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const custTableTitles: string[] = [
  "Action",
  "Customer ID",
  "Name",
  "Email",
  "Mobile No",
  "Aadhar No",
  "PAN No",
  "Date of Birth",
  "Street",
  "City",
  "State",
  "Zip",
  "Account No",
  "Account Type",
  "Balance",
  "Active",
  "Created At"
];


@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrl: './view-all-customers.component.css'
})
export class ViewAllCustomersComponent implements OnInit {
  custTableTitles:string[] = custTableTitles;
  customersList!:Array<ICustomerDetails>;
  isLoading:boolean = false;
  cust: ICustomerInputFields = {} as ICustomerInputFields;

  constructor(private customersService: CustomersService, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void {
    this.isLoading = true;
    this.customersService.getAllCustomers().subscribe(
      (data) => {
        // console.log("Success: ", data);
        this.isLoading = false;
        if(data.success) {
          this.customersList = data.data;
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

  deleteCustomerById(customerId: number): void {
    if(!customerId) return;
    this.customersService.deleteCustomerById(customerId).subscribe(
        (data) => {
            // console.log("Success: ", data);
            if(data.success) {
              this.customersList = this.customersList.filter(cust => cust.customerId != data.data.customerId)
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

  editCustomer(customerId: number): void {
    // console.log(customerId);
    this.router.navigate([`/customers/edit-customer/${customerId}`]);
  }

}
