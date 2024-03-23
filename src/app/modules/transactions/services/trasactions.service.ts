import { ITransactionFormModel } from '../interfaces/ITransaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../../../shared/interfaces/IResponseModel';
import { ITransaction } from '../interfaces/ITransaction';
import { APP_BASE_URL } from '../../../app-base-url';

@Injectable({
  providedIn: 'root'
})
export class TrasactionsService {

  constructor(private http: HttpClient) { }

  getAllTransactions(): Observable<IResponseModel<Array<ITransaction>>> {
    return this.http.get<IResponseModel<Array<ITransaction>>>(`${APP_BASE_URL}/transactions`);
  }

  getTransactionsByAccNo(accountNo: number): Observable<IResponseModel<Array<ITransaction>>> {
    return this.http.get<IResponseModel<Array<ITransaction>>>(`${APP_BASE_URL}/transactions/getByAccountNo/${accountNo}`);
  }

  makeTransaction(transactionFormData:ITransactionFormModel): Observable<IResponseModel<Array<ITransaction>>> {
    return this.http.post<IResponseModel<Array<ITransaction>>>(`${APP_BASE_URL}/transactions/makeTransaction`, transactionFormData);
  }
}
