import { TestBed } from '@angular/core/testing';

import { InfluencerGuard } from './influencer.guard';

describe('InfluencerGuard', () => {
  let guard: InfluencerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfluencerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
