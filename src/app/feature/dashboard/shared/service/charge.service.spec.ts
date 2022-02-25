import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { ChargeModel } from '../models/charges.model';

import { ChargeService } from './charge.service';

describe('ChargeService', () => {
  let service: ChargeService;
  let httpMock: HttpTestingController;
  const apiGet = `${environment.endpoint}/descuentos`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpService,

      ]
    });
    service = TestBed.inject(ChargeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // no permite que haya peticiones pendientes entre cada test
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Devolver toda la lista de cargos', () => {
    const dummyCharges = [
      new ChargeModel(
        1,
       'Cargo por Consulta en día Festivo',
       'Cargo',
        1
      )
    ];

    service.getAllCharges()
      .subscribe(charges => {
        expect(charges.length).toBe(1);
        expect(charges).toEqual(dummyCharges);
      });
    const req = httpMock.expectOne(apiGet);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCharges);
  });
});
