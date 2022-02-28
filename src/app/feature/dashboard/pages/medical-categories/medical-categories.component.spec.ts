import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { DashboardRoutingModule } from '../../dashboard.routing';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';
import { MedicalCategoriesComponent } from './medical-categories.component';

describe('MedicalCategoriesComponent', () => {
  let component: MedicalCategoriesComponent;
  let fixture: ComponentFixture<MedicalCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        DashboardRoutingModule,
        HttpClientTestingModule,
        CommonModule
      ],
      declarations: [MedicalCategoriesComponent],
      providers: [
        HttpService, MedicalCategoryService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
