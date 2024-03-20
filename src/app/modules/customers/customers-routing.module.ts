import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewAllCustomersComponent } from './components/view-all-customers/view-all-customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      { path: 'view-all-customers', component: ViewAllCustomersComponent },
      { path: 'view-customer-by-aadhar', component: ViewCustomerComponent },
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'edit-customer/:customerId', component: EditCustomerComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
