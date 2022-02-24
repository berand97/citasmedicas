import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { NotificationService } from '@core/services/notification.service';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';

import { MedicalCategoriesComponent } from './medical-categories.component';

xdescribe('MedicalCategoriesComponent', () => {
  let component: MedicalCategoriesComponent;
  let fixture: ComponentFixture<MedicalCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MedicalCategoriesComponent],
      providers: [
        HttpService,
        { provide: NotificationService, useValue: new NotificationService() },
        { provide: MedicalCategoryService, useValue: MedicalCategoryService },
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
