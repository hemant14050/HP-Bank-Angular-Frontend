import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkButtonComponent } from './components/nav-link-button/nav-link-button.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DateFormatterPipe } from './utils/date-formatter.pipe';
import { AccountTypePipe } from './utils/account-type.pipe';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SmallSpinnerComponent } from './components/small-spinner/small-spinner.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';



@NgModule({
  declarations: [
    NavLinkButtonComponent,
    SpinnerComponent,
    DateFormatterPipe,
    AccountTypePipe,
    MyButtonComponent,
    PageNotFoundComponent,
    SmallSpinnerComponent,
    MyModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavLinkButtonComponent,
    SpinnerComponent,
    DateFormatterPipe,
    AccountTypePipe,
    PageNotFoundComponent,
    MyButtonComponent,
    SmallSpinnerComponent,
    MyModalComponent
  ]
})
export class SharedModule { }
