import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITransactionFormModel } from '../../interfaces/ITransaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent implements OnInit {
  @Input({required:true}) formType!:string;
  transactionFormData!: ITransactionFormModel;
  @Output() formSubmit: EventEmitter<ITransactionFormModel> = new EventEmitter<ITransactionFormModel>();
  submitBtnClicked:boolean = false;
  @Input() isLoading!:boolean;

  ngOnInit(): void {
    this.transactionFormData = {
      transactionType: this.formType
    }
  }

  onSubmitHandler(): void {
    // console.log("form: ", this.transactionFormData);
    this.submitBtnClicked = true;
    if(!this.transactionFormData.accountNo || !this.transactionFormData.amount) return;
    if(this.formType !== this.transactionFormData.transactionType)  return;

    this.formSubmit.emit(this.transactionFormData);
  }
}
