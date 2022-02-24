import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { MedicalCategory } from '../interfaces/medical-category.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicalCategoryService {

  URL: string = environment.endpoint;

  constructor(
    private http: HttpService
  ) { }


  getAllCategories() {
    return this.http.doGet<MedicalCategory[]>(`${this.URL}/categorias`,
      this.http.optsName('Obtener todas las categorias medicas'));
  }

  createMedicalCategory(categoriaMedica: MedicalCategory) {
    return this.http.doPost<MedicalCategory, boolean>(`${this.URL}/categorias`, categoriaMedica,
      this.http.optsName('Crear nueva Categoria Medica'));
  }

  getIdCategory(id: string) {
    return this.http.doGet<MedicalCategory>(`${this.URL}/categorias?categoryMedicalName=${id}`,
      this.http.optsName('obtener id de categoria medica'));
  }

}
