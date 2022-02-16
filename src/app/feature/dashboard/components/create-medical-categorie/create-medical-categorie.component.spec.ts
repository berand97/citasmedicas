import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalCategorieComponent } from './create-medical-categorie.component';

describe('CreateMedicalCategorieComponent', () => {
  let component: CreateMedicalCategorieComponent;
  let fixture: ComponentFixture<CreateMedicalCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicalCategorieComponent ]
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
