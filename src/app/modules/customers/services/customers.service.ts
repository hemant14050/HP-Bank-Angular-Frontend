import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../../../shared/interfaces/IResponseModel';
import { ICustomerDetails } from '../interfaces/ICustomerDetails';
import { ICustomer, ICustomerInputFields, ICustomerUpdateFields } from '../interfaces/ICustomer';
import { APP_BASE_URL } from '../../../app-base-url';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getAllCustomers():Observable<IResponseModel<Array<ICustomerDetails>>> {
    return this.http.get<IResponseModel<Array<ICustomerDetails>>>(`${APP_BASE_URL}/customers`);
  }

  deleteCustomerById(customerId:number): Observable<IResponseModel<ICustomer>> {
    return this.http.delete<IResponseModel<ICustomer>>(`${APP_BASE_URL}/customers/${customerId}`);
  }

  addCustomer(customerFormData:ICustomerInputFields): Observable<IResponseModel<ICustomerDetails>> {
    // console.log(customerFormData);
    return this.http.post<IResponseModel<ICustomerDetails>>(`${APP_BASE_URL}/customers`, customerFormData);
  }

  updateCustomer(customerId:number, customerFormData:ICustomerUpdateFields): Observable<IResponseModel<ICustomerDetails>> {
    // console.log(customerFormData);
    return this.http.patch<IResponseModel<ICustomerDetails>>(`${APP_BASE_URL}/customers/${customerId}`, customerFormData);
  }

  getCustomerById(customerId: number): Observable<IResponseModel<ICustomerDetails>> {
    return this.http.get<IResponseModel<ICustomerDetails>>(`${APP_BASE_URL}/customers/${customerId}`);
  }

  getCustomerByAadharNo(aadharNo: string): Observable<IResponseModel<ICustomerDetails>> {
    return this.http.get<IResponseModel<ICustomerDetails>>(`${APP_BASE_URL}/customers/customer?aadharNo=${aadharNo}`);
  }
}
