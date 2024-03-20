import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionFormModel } from '../../interfaces/Transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent implements OnInit {
  @Input({required:true}) formType!:string;
  transactionFormData!: TransactionFormModel;
  @Output() formSubmit: EventEmitter<TransactionFormModel> = new EventEmitter<TransactionFormModel>();
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
