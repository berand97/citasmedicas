import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Charge } from '../interfaces/price.interface';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  URL: string = environment.endpoint;
  constructor(
    private http: HttpService
  ) { }

  getAllCharges() {
    return this.http.doGet<Charge[]>(`${this.URL}/descuentos`,
      this.http.optsName('Obtener todas los cargos y descuentos'));
  }

  createCharge(charge: Charge) {
    return this.http.doPost<Charge, boolean>(`${this.URL}/descuentos`, charge,
      this.http.optsName('Crear nuevo cargo o descuento'));
  }
}
