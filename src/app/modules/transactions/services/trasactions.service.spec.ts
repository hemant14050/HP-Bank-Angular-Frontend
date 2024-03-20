import { TestBed } from '@angular/core/testing';

import { TrasactionsService } from './trasactions.service';

describe('TrasactionsService', () => {
  let service: TrasactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrasactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
