import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { MedicalCategoryModel } from '../models/medical-category.model';

import { MedicalCategoryService } from './medical-category.service';

describe('MedicalCategoryService', () => {
  let service: MedicalCategoryService;
  let httpMock: HttpTestingController;
  const apiGet = `${environment.endpoint}/categorias`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpService,

      ]
    });
    service = TestBed.inject(MedicalCategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Devolver toda la lista de categorias', () => {
    const dummyMedicalCategories = [
      new MedicalCategoryModel(
        1,
        'Medicina General',
        120000
      )
    ];

    service.getAllCategories()
      .subscribe(medicalCategories => {
        expect(medicalCategories.length).toBe(1);
        expect(medicalCategories).toEqual(dummyMedicalCategories);
      });
    const req = httpMock.expectOne(apiGet);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMedicalCategories);
  });
});
