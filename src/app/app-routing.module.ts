import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { authGaurdGuard } from './core/gaurds/auth-gaurd.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path:'home',
    canActivate: [authGaurdGuard],
    component: HomePageComponent
  },
  {
    path: 'customers',
    canActivate: [authGaurdGuard],
    loadChildren: () =>
      import('./modules/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'accounts',
    canActivate: [authGaurdGuard],
    loadChildren: () =>
      import('./modules/accounts/accounts.module').then(
        (m) => m.AccountsModule
      ),
  },
  
  {
    path: 'transactions',
    canActivate: [authGaurdGuard],
    loadChildren: () =>
      import('./modules/transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
