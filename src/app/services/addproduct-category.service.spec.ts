import { TestBed } from '@angular/core/testing';

import { AddproductCategoryService } from './addproduct-category.service';

describe('AddproductCategoryService', () => {
  let service: AddproductCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproductCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
