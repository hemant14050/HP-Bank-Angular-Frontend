import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ViewAllAccountsComponent } from './components/view-all-accounts/view-all-accounts.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { InterestRateComponent } from './components/interest-rate/interest-rate.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountsComponent,
    ViewAllAccountsComponent,
    ViewAccountComponent,
    InterestRateComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ]
})
export class AccountsModule { }
