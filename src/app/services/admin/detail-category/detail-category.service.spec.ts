import { TestBed } from '@angular/core/testing';

import { DetailCategoryService } from './detail-category.service';

describe('DetailCategoryService', () => {
  let service: DetailCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
