import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';

import { CreateMedicalCategorieComponent } from './create-medical-categorie.component';

describe('CreateMedicalCategorieComponent', () => {
  let component: CreateMedicalCategorieComponent;
  let fixture: ComponentFixture<CreateMedicalCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CreateMedicalCategorieComponent],
      providers: [NgbActiveModal,
        { provide: MedicalCategoryService, useValue: MedicalCategoryService}
      ]
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
});
