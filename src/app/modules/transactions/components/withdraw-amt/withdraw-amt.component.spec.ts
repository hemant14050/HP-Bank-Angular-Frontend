import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawAmtComponent } from './withdraw-amt.component';

describe('WithdrawAmtComponent', () => {
  let component: WithdrawAmtComponent;
  let fixture: ComponentFixture<WithdrawAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawAmtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
