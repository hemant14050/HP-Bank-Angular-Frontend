import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../../shared/interfaces/ResponseModel';
import { CustomerDetails } from '../interfaces/CustomerDetails';
import { Customer, CustomerInputFields, CustomerUpdateFields } from '../interfaces/Customer';
import { APP_BASE_URL } from '../../../app-base-url';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getAllCustomers():Observable<ResponseModel<Array<CustomerDetails>>> {
    return this.http.get<ResponseModel<Array<CustomerDetails>>>(`${APP_BASE_URL}/customers`);
  }

  deleteCustomerById(customerId:number): Observable<ResponseModel<Customer>> {
    return this.http.delete<ResponseModel<Customer>>(`${APP_BASE_URL}/customers/${customerId}`);
  }

  addCustomer(customerFormData:CustomerInputFields): Observable<ResponseModel<CustomerDetails>> {
    // console.log(customerFormData);
    return this.http.post<ResponseModel<CustomerDetails>>(`${APP_BASE_URL}/customers`, customerFormData);
  }

  updateCustomer(customerId:number, customerFormData:CustomerUpdateFields): Observable<ResponseModel<CustomerDetails>> {
    // console.log(customerFormData);
    return this.http.patch<ResponseModel<CustomerDetails>>(`${APP_BASE_URL}/customers/${customerId}`, customerFormData);
  }

  getCustomerById(customerId: number): Observable<ResponseModel<CustomerDetails>> {
    return this.http.get<ResponseModel<CustomerDetails>>(`${APP_BASE_URL}/customers/${customerId}`);
  }

  getCustomerByAadharNo(aadharNo: string): Observable<ResponseModel<CustomerDetails>> {
    return this.http.get<ResponseModel<CustomerDetails>>(`${APP_BASE_URL}/customers/customer?aadharNo=${aadharNo}`);
  }
}
