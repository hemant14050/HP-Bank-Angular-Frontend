import { ToastrService } from 'ngx-toastr';
import { ICustomerDetails } from '../../interfaces/ICustomerDetails';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { MyModalComponent } from '../../../../shared/components/my-modal/my-modal.component';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit {
  currCustomerData!:ICustomerDetails;
  modalTitle!:string;
  modalMessage!:string;
  @ViewChild(MyModalComponent) myModal!:MyModalComponent;
  @ViewChild(CustomerFormComponent) customerFormComponent!: CustomerFormComponent;
  isLoading:boolean = false;

  constructor(private customersService: CustomersService, private activatedRoute: ActivatedRoute, private toastr:ToastrService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const customerId = params['customerId'];
      // console.log('Customer ID:', customerId);
      this.customersService.getCustomerById(customerId).subscribe(
        data => {
          if(data.success) {
            this.currCustomerData = data.data;
          } else {
            this.toastr.warning(data.message);
          }
          // console.log(data);
        },
        (err) => {
          // console.log("Error --> ", err);
          if(err?.error?.message) {
            this.toastr.warning(err?.error?.message);
          } else {
            this.toastr.error(err.statusText);
          }
        }
      );
    });
  }

  handleSubmit(customerFormData:any): void {
    // console.log(customerFormData);
    this.isLoading = true;
    this.customersService.updateCustomer(this.currCustomerData.customerId, customerFormData).subscribe(
      (data) => {
        // console.log(data);
        if(data.success) {
          // this.newCustomerData = data.data;
          // this.customerFormComponent.clearForm();
          this.modalTitle = "Success!";
        } else {
          this.modalTitle = "Failed!";
        }
        this.isLoading = false;
        this.modalMessage = data.message;
        this.myModal.openModal();
      },
      (err) => {
        this.isLoading = false;
        // console.log("Error --> ",err);
        this.modalTitle = "Failed!";
        if(err?.error?.message) {
          this.modalMessage = err?.error?.message;
        } else {
          this.modalMessage = err?.statusText;
        }
        this.myModal.openModal();
      }
    );
  }
}
