import {TestBed} from '@angular/core/testing';

import {QuickbloxService} from './quickblox.service';

describe('QuickbloxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickbloxService = TestBed.get(QuickbloxService);
    expect(service).toBeTruthy();
  });
});
