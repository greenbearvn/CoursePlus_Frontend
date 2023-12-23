import { TestBed } from '@angular/core/testing';

import { TestedService } from './tested.service';

describe('TestedService', () => {
  let service: TestedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
