import { TestBed } from '@angular/core/testing';

import { MyActGaurdGuard } from './my-act-gaurd.guard';

describe('MyActGaurdGuard', () => {
  let guard: MyActGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyActGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
