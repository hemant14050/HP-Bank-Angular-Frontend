import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAccountsComponent } from './view-all-accounts.component';

describe('ViewAllAccountsComponent', () => {
  let component: ViewAllAccountsComponent;
  let fixture: ComponentFixture<ViewAllAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
