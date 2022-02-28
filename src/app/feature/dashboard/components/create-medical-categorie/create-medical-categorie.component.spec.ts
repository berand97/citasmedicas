import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from '../../dashboard.routing';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';
import { CreateMedicalCategorieComponent } from './create-medical-categorie.component';

describe('CreateMedicalCategorieComponent', () => {
  let component: CreateMedicalCategorieComponent;
  let fixture: ComponentFixture<CreateMedicalCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        CreateMedicalCategorieComponent
      ],
      providers: [
        HttpService,
        MedicalCategoryService,
        NgbActiveModal
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Created a medical category', () => {
    expect(component.createMedicalCategoryForm.valid).toBeFalsy();
    component.createMedicalCategoryForm.controls.categoryMedicalName.setValue('Odontologia');
    component.createMedicalCategoryForm.controls.priceCategory.setValue(60000);
    expect(component.createMedicalCategoryForm.valid).toBeTruthy();
    component.createMedicalCategory();
  });
});
