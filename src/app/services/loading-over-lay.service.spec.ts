import { TestBed } from '@angular/core/testing';

import { LoadingOverLayService } from './loading-over-lay.service';

describe('LoadingOverLayService', () => {
  let service: LoadingOverLayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingOverLayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
