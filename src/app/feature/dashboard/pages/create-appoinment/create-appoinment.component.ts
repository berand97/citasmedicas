import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalCategory } from '../../shared/interfaces/medical-category.interface';
import { Charge } from '../../shared/interfaces/price.interface';
import { User } from '../../shared/interfaces/user.interface';
import { HOURS } from '../../shared/models/hours.model';
import { AppoinmentService } from '../../shared/service/appoinment.service';
import { ChargeService } from '../../shared/service/charge.service';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';
import { UserService } from '../../shared/service/user.service';
@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.scss']
})
export class CreateAppoinmentComponent implements OnInit {

  createAppoinmentForm: FormGroup;

  id: string;
  total: number;
  name: string;
  lastName: string;
  typeDocument: string;
  numberDocument: number;
  healtyCompany: string;
  typeAffiliate: string;
  documentAffilliate: string;
  discount: number;
  valuePriceCategory: number;

  medicalCategories: MedicalCategory[] = [];
  discounts: Charge[] = [];
  hours = HOURS;

  minDate: Date;




  constructor(
    private fb: FormBuilder,
    private medicalCategoriesService: MedicalCategoryService,
    private userService: UserService,
    private chargeService: ChargeService,
    private appoinmentService: AppoinmentService
  ) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  ngOnInit(): void {
    this.buildForm();
    this.loadMedicalCategories();
    this.loadCharges();
  }

  buildForm(): void {
    this.createAppoinmentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      typeDocument: ['', Validators.required],
      numberDocument: [null],
      healtyCompany: ['', Validators.required],
      typeAffiliate: ['', Validators.required],
      priceCategory: [null],
      discount: [null],
      hour: ['', Validators.required],
      categoryMedicalName: ['', Validators.required],
      appoinmentDate: ['', Validators.required],
      total: [null],
    });
  }

  loadMedicalCategories() {
    this.medicalCategoriesService.getAllCategories()
      .subscribe((data: MedicalCategory[]) => {
        this.medicalCategories = data;
      });
  }

  loadCharges() {
    this.chargeService.getAllCharges()
      .subscribe((data: Charge[]) => {
        this.discounts = data;
      });
  }

  existAffiliate(numberDocument) {
    this.documentAffilliate = numberDocument;
    this.userService.getUserId(numberDocument)
      .subscribe((data: User[]) => {
        if (data) {
          this.name = data[0].name;
          this.lastName = data[0].lastName;
          this.typeDocument = data[0].typeDocument;
          this.numberDocument = data[0].numberDocument;
          this.healtyCompany = data[0].healtyCompany;
          this.typeAffiliate = data[0].typeAffiliate;
        }
      });
  }

  getidCategory(id: string) {
    this.medicalCategoriesService.getIdCategory(id)
      .subscribe((data: MedicalCategory) => {
        this.valuePriceCategory = data[0].priceCategory;
      });
  }

  getPercentValue(percent: number) {
    this.discount = percent;
    this.total = (this.valuePriceCategory - (this.valuePriceCategory * this.discount));
  }

  createAppoinment() {
    const body = this.createAppoinmentForm.value;
    this.appoinmentService.createAppoinment(body)

  }
}
