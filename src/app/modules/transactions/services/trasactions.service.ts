import { TransactionFormModel } from './../interfaces/Transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../../shared/interfaces/ResponseModel';
import { Transaction } from '../interfaces/Transaction';
import { APP_BASE_URL } from '../../../app-base-url';

@Injectable({
  providedIn: 'root'
})
export class TrasactionsService {

  constructor(private http: HttpClient) { }

  getAllTransactions(): Observable<ResponseModel<Array<Transaction>>> {
    return this.http.get<ResponseModel<Array<Transaction>>>(`${APP_BASE_URL}/transactions`);
  }

  getTransactionsByAccNo(accountNo: number): Observable<ResponseModel<Array<Transaction>>> {
    return this.http.get<ResponseModel<Array<Transaction>>>(`${APP_BASE_URL}/transactions/getByAccountNo/${accountNo}`);
  }

  makeTransaction(transactionFormData:TransactionFormModel): Observable<ResponseModel<Array<Transaction>>> {
    return this.http.post<ResponseModel<Array<Transaction>>>(`${APP_BASE_URL}/transactions/makeTransaction`, transactionFormData);
  }
}
