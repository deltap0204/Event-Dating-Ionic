import { TestBed } from '@angular/core/testing';

import { UserPaymentsService } from './user-payments.service';

describe('UserPaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPaymentsService = TestBed.get(UserPaymentsService);
    expect(service).toBeTruthy();
  });
});
