import { Component, OnInit } from '@angular/core';
import { MEDICALCATEGORIES } from '../../shared/mockup/medical-category.mockup';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateMedicalCategorieComponent } from '../../components/create-medical-categorie/create-medical-categorie.component';

@Component({
  selector: 'app-medical-categories',
  templateUrl: './medical-categories.component.html',
  styleUrls: ['./medical-categories.component.scss']
})
export class MedicalCategoriesComponent implements OnInit {

  medicalCategories = MEDICALCATEGORIES;

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(CreateMedicalCategorieComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit(): void {

  }

}
