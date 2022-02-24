import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { ChargeService } from './charge.service';

describe('ChargeService', () => {
  let service: ChargeService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
