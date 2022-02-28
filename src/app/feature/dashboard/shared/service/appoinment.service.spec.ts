import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { AppoinmentService } from './appoinment.service';
import { AppoinmentModel } from '../models/appoinment.model';
import { environment } from 'src/environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppoinmentService', () => {
  let service: AppoinmentService;
  let httpMock: HttpTestingController;
  const apiGet = `${environment.endpoint}/citas`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpService, AppoinmentService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(AppoinmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // no permite que haya peticiones pendientes entre cada test
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Devolver toda la lista de citas', () => {
    const dummyAppoinment = [
      new AppoinmentModel(
        1,
        'Karen',
        'Barrera',
        'Cedula de ciudadania',
        1118555894,
        'Sura',
        'Contributivo',
        100000,
        '0.5',
        '13:00 - 14:00 P.M',
        'Optometría',
        '2022-02-28',
        50000
      ),
      new AppoinmentModel(
        2,
        'Andres',
        'Patiño',
        'Cedula de ciudadania',
        1115864825,
        'Sura',
        'Contributivo',
        100000,
        '0.1',
        '15:00 A.M - 16:00 P.M',
        'Optometría',
        '2022-03-24T20:03:50.534Z',
        90000,
      )
    ];

    service.getAllAppoinments()
      .subscribe(appoinment => {
        expect(appoinment.length).toBe(2);
        expect(appoinment).toEqual(dummyAppoinment);
      });
    const req = httpMock.expectOne(apiGet);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAppoinment);
  });

});
