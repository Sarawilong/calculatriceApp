import { TestBed } from '@angular/core/testing';

import { CalculateFunctionsService } from './calculate-functions.service';

describe('CalculateFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateFunctionsService = TestBed.get(CalculateFunctionsService);
    expect(service).toBeTruthy();
  });
});
