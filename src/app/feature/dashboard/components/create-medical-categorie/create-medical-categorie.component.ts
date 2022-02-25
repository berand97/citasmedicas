import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';

@Component({
  selector: 'app-create-medical-categorie',
  templateUrl: './create-medical-categorie.component.html',
  styleUrls: ['./create-medical-categorie.component.scss']
})
export class CreateMedicalCategorieComponent implements OnInit {

  createMedicalCategoryForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private medicalCategory: MedicalCategoryService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.createMedicalCategoryForm = this.fb.group({
      categoryMedicalName: ['', [Validators.required]],
      priceCategory: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  createMedicalCategory() {
    const body = this.createMedicalCategoryForm.value;
    this.medicalCategory.createMedicalCategory(body);
  }

}
