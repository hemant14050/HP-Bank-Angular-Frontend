import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../../shared/interfaces/ResponseModel';
import { Account } from '../interfaces/Account';
import { APP_BASE_URL } from '../../../app-base-url';
import { InterestRate } from '../interfaces/InterestRate';
import { CustomerDetails } from '../../customers/interfaces/CustomerDetails';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<ResponseModel<Array<Account>>> {
    return this.http.get<ResponseModel<Array<Account>>>(`${APP_BASE_URL}/accounts`);
  }

  getAccountById(accountNo:number): Observable<ResponseModel<CustomerDetails>> {
    return this.http.get<ResponseModel<CustomerDetails>>(`${APP_BASE_URL}/accounts/${accountNo}`);
  }

  changeStatus(accountNo:number): Observable<ResponseModel<Account>> {
    return this.http.patch<ResponseModel<Account>>(`${APP_BASE_URL}/accounts/changeStatus/${accountNo}`, []);
  }

  getInterestRate(accountTypeId: number): Observable<ResponseModel<InterestRate>> {
    return this.http.get<ResponseModel<InterestRate>>(`${APP_BASE_URL}/accounts/getInterestRate/${accountTypeId}`);
  }
}
