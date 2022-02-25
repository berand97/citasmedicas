import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/users.model';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  const apiGet = `${environment.endpoint}/usuarios/`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpService,
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // no permite que haya peticiones pendientes entre cada test
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Devolver toda la lista de usuarios', () => {
    const dummyUser = [
      new UserModel(
        1,
        'Karen',
        'Barrera',
        'Cedula de ciudadania',
        1118555894,
        'Sura',
        'Contributivo'
      )
    ];

    service.getAll()
      .subscribe(users => {
        expect(users.length).toBe(1);
        expect(users).toEqual(dummyUser);
      });
    const req = httpMock.expectOne(apiGet);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });
});
