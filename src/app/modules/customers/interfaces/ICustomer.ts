export interface ICustomer {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  addharNo: string;
  panNo: string;
  dob: Date;
  street: string;
  city: string;
  custState: string;
  zip: number;
}

export interface ICustomerInputFields {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNo?: string;
  addharNo?: string;
  panNo?: string;
  dob: Date;
  street?: string;
  city?: string;
  custState?: string;
  zip?: number;
  accountTypeId?: number;
  openingBalance?: number;
}

export interface ICustomerUpdateFields {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNo?: string;
  addharNo?: string;
  panNo?: string;
  dob: Date;
  street?: string;
  city?: string;
  custState?: string;
  zip?: number;
}
