export interface Customer {
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

export interface CustomerInputFields {
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

export interface CustomerUpdateFields {
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
