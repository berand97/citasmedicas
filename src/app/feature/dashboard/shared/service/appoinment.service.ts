import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Appoinment } from '../interfaces/appoinment.interface';

@Injectable()
export class AppoinmentService {

  URL: string = environment.endpoint;

  constructor(
    protected http: HttpService
  ) { }

  public getAllAppoinments() {
    return this.http.doGet<Appoinment[]>(`${this.URL}/citas`,
      this.http.optsName('Obtener todas las citas'));
  }

  public createAppoinment(appoinment: Appoinment) {
    return this.http.doPost<Appoinment, boolean>(`${this.URL}/citas`, appoinment,
      this.http.optsName('Crear nueva cita'));
  }
}
