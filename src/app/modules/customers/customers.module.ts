import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ViewAllCustomersComponent } from './components/view-all-customers/view-all-customers.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ViewAllCustomersComponent,
    ViewCustomerComponent,
    AddCustomerComponent,
    CustomerFormComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class CustomersModule { }
