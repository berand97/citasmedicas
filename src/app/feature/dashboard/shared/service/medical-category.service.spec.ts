import { TestBed } from '@angular/core/testing';

import { MedicalCategoryService } from './medical-category.service';

xdescribe('MedicalCategoryService', () => {
  let service: MedicalCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
