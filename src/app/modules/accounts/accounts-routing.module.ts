import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { InterestRateComponent } from './components/interest-rate/interest-rate.component';
import { ViewAllAccountsComponent } from './components/view-all-accounts/view-all-accounts.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';

const routes: Routes = [
  { 
    path: '', 
    component: AccountsComponent, 
    children: [
      { path: 'view-accounts', component: ViewAllAccountsComponent },
      { path: 'view-account-by-accNo', component: ViewAccountComponent },
      { path: 'view-interest-rate', component: InterestRateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
