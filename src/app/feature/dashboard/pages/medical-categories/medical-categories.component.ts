import { Component, OnInit } from '@angular/core';
import { ModalGlobalService } from '@core/services/modal-global.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CreateMedicalCategorieComponent } from '../../components/create-medical-categorie/create-medical-categorie.component';
import { MedicalCategory } from '../../shared/interfaces/medical-category.interface';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';

@Component({
  selector: 'app-medical-categories',
  templateUrl: './medical-categories.component.html',
  styleUrls: ['./medical-categories.component.scss']
})
export class MedicalCategoriesComponent implements OnInit {

  listSubscribers: Subscription[] = [];
  medicalCategories: MedicalCategory[];
  active = 1;

  constructor(
    private modalService: NgbModal,
    private modalGlobalService: ModalGlobalService,
    private medicalCategoriesService: MedicalCategoryService,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.loadMedicalCategories();
    this.listenObserver();
  }

  open() {
    const modalRef = this.modalService.open(CreateMedicalCategorieComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'Crear Categoria Medica';
  }

  loadMedicalCategories() {
    this.medicalCategoriesService.getAllCategories()
      .subscribe((data: MedicalCategory[]) => {
        this.medicalCategories = data;
      })
  }

  listenObserver = () => {
    const observer1$ = this.modalGlobalService.event.subscribe(() => {
      this.loadMedicalCategories();
    })

    this.listSubscribers = [observer1$];
  }

  ngOnDestroy(): void {
    this.listSubscribers.map(a => a.unsubscribe());
  }

}
