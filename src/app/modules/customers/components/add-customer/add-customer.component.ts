import { MyModalComponent } from '../../../../shared/components/my-modal/my-modal.component';
import { CustomerDetails } from '../../interfaces/CustomerDetails';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomersService } from './../../services/customers.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  newCustomerData!:CustomerDetails;
  isLoading:boolean = false;
  modalTitle!:string;
  modalMessage!:string;
  @ViewChild(MyModalComponent) myModal!:MyModalComponent;
  @ViewChild(CustomerFormComponent) customerFormComponent!: CustomerFormComponent;

  constructor(private customersService: CustomersService){}

  handleSubmit(customerFormData:any):void {
    // console.log(customerFormData);
    this.isLoading = true;
    this.customersService.addCustomer(customerFormData).subscribe(
      (data) => {
        // console.log(data);
        if(data.success) {
          this.newCustomerData = data.data;
          this.customerFormComponent.clearForm();
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
          this.modalMessage = err?.message;
        }
        this.myModal.openModal();
      }
    );
  }

}
