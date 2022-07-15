import { TestBed } from '@angular/core/testing';

import { InfluencerRedirectGuard } from './influencer-redirect.guard';

describe('InfluencerRedirectGuard', () => {
  let guard: InfluencerRedirectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfluencerRedirectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
