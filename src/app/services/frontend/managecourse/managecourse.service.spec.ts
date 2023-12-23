import { TestBed } from '@angular/core/testing';

import { ManagecourseService } from './managecourse.service';

describe('ManagecourseService', () => {
  let service: ManagecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
