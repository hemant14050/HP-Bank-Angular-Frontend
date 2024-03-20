import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAmtComponent } from './deposit-amt.component';

describe('DepositAmtComponent', () => {
  let component: DepositAmtComponent;
  let fixture: ComponentFixture<DepositAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositAmtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
