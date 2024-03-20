import { CustomerDetails } from './../../interfaces/CustomerDetails';
import { CustomersService } from './../../services/customers.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerInputFields } from '../../interfaces/Customer';
import { Router } from '@angular/router';

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
  customersList!:Array<CustomerDetails>;
  isLoading:boolean = false;
  cust: CustomerInputFields = {} as CustomerInputFields;

  constructor(private customersService: CustomersService, private router: Router){}

  ngOnInit(): void {
    this.isLoading = true;
    this.customersService.getAllCustomers().subscribe(
      data => {
        if(data.success) {
          this.customersList = data.data;
        } else {
          console.log("Error: ", data.message);
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

  deleteCustomerById(customerId: number): void {
    if(!customerId) return;
    this.customersService.deleteCustomerById(customerId).subscribe(
      data => {
        if(data.success) {
          this.customersList = this.customersList.filter(cust => cust.customerId != data.data.customerId)
        } else {
          console.log("Error: ", data.message);
        }
      },
      (err) => {
        // console.log(err);
        if(err?.error?.message) {
          window.alert(err?.error?.message);
        } else {
          window.alert(err.message);
        }
      }
    );
  }

  editCustomer(customerId: number): void {
    // console.log(customerId);
    this.router.navigate([`/customers/edit-customer/${customerId}`]);
  }

}