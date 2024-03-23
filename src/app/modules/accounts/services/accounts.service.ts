import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../../../shared/interfaces/IResponseModel';
import { IAccount } from '../interfaces/IAccount';
import { APP_BASE_URL } from '../../../app-base-url';
import { IInterestRate } from '../interfaces/IInterestRate';
import { ICustomerDetails } from '../../customers/interfaces/ICustomerDetails';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<IResponseModel<Array<IAccount>>> {
    return this.http.get<IResponseModel<Array<IAccount>>>(`${APP_BASE_URL}/accounts`);
  }

  getAccountById(accountNo:number): Observable<IResponseModel<ICustomerDetails>> {
    return this.http.get<IResponseModel<ICustomerDetails>>(`${APP_BASE_URL}/accounts/${accountNo}`);
  }

  changeStatus(accountNo:number): Observable<IResponseModel<IAccount>> {
    return this.http.patch<IResponseModel<IAccount>>(`${APP_BASE_URL}/accounts/changeStatus/${accountNo}`, []);
  }

  getInterestRate(accountTypeId: number): Observable<IResponseModel<IInterestRate>> {
    return this.http.get<IResponseModel<IInterestRate>>(`${APP_BASE_URL}/accounts/getInterestRate/${accountTypeId}`);
  }
}
