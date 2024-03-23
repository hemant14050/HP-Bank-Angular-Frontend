import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomerDetails } from '../../interfaces/ICustomerDetails';
import { format } from 'date-fns';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {
  @Input({required: true}) formTitle: string = '';
  @Input() formType: string = 'add';
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() customerFormData!:ICustomerDetails;
  @Input() isLoading:boolean = false;

  customerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(this.customerFormData?.firstName || '', [Validators.required]),
      lastName: new FormControl(this.customerFormData?.lastName || '', [Validators.required]),
      email: new FormControl(this.customerFormData?.email || '', [Validators.required, Validators.email]),
      mobileNo: new FormControl(this.customerFormData?.mobileNo || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      addharNo: new FormControl(this.customerFormData?.addharNo || '', [Validators.required, Validators.pattern('^[0-9]{12}$')]),
      panNo: new FormControl(this.customerFormData?.panNo || '', [Validators.required]),
      dob: new FormControl(this.getFormattedDate(this.customerFormData?.dob) || '', [Validators.required]),
      street: new FormControl(this.customerFormData?.street || '', [Validators.required]),
      city: new FormControl(this.customerFormData?.city || '', [Validators.required]),
      custState: new FormControl(this.customerFormData?.custState || '', [Validators.required]),
      zip: new FormControl(this.customerFormData?.zip || '', [Validators.required, Validators.pattern('^[0-9]{6}$')])
    });
    if(this.formType === 'add') {
      this.customerForm.addControl('accountTypeId', new FormControl(this.customerFormData?.accountTypeId || '', [Validators.required, Validators.pattern('^[0-9]{1}$')]));
      this.customerForm.addControl('openingBalance', new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]))
    }
  }

  getFormattedDate(date: Date | string): any {
    if(!date) return null;
    return format(date, 'yyyy-MM-dd');
  } 

  onSubmit(): void {
    this.customerForm.markAllAsTouched();
    if (this.customerForm.valid) {
      this.formSubmit.emit(this.customerForm.value);
    } else {
      console.log("Invalid form");
    }
    // console.log(this.customerFormData);
  } 

  public clearForm() {
    this.customerForm.reset();
  }
}
