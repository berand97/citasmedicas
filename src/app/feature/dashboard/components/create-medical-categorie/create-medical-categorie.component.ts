import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalGlobalService } from '@core/services/modal-global.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';

@Component({
  selector: 'app-create-medical-categorie',
  templateUrl: './create-medical-categorie.component.html',
  styleUrls: ['./create-medical-categorie.component.scss']
})
export class CreateMedicalCategorieComponent implements OnInit {

  createMedicalCategoryForm = this.fb.group({
    categoryMedicalName:['',[Validators.required]],
    priceCategory:['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(
    private fb: FormBuilder,
    private modalGlobalService: ModalGlobalService,
    public activeModal: NgbActiveModal,
    private medicalCategory: MedicalCategoryService
  ) { }

  ngOnInit(): void {
  }

  createMedicalCategory(){
    const body = this.createMedicalCategoryForm.value

    this.medicalCategory.createMedicalCategory(body)
    .subscribe(_resp=>{
      this.modalGlobalService.event.emit('close')
    })
  }

}
