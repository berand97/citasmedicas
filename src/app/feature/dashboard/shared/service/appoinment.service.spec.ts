import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { AppoinmentService } from './appoinment.service';

describe('AppoinmentService', () => {
  let service: AppoinmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpService
      ]
    });
    service = TestBed.inject(AppoinmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
