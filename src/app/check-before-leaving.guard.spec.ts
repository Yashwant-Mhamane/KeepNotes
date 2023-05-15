import { TestBed } from '@angular/core/testing';

import { CheckBeforeLeavingGuard } from './check-before-leaving.guard';

describe('CheckBeforeLeavingGuard', () => {
  let guard: CheckBeforeLeavingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckBeforeLeavingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
