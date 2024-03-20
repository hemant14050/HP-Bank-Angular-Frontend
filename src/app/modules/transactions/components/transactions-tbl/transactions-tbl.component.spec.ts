import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTblComponent } from './transactions-tbl.component';

describe('TransactionsTblComponent', () => {
  let component: TransactionsTblComponent;
  let fixture: ComponentFixture<TransactionsTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTblComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionsTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
