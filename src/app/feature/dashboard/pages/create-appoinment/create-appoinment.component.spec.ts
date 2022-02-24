import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { MedicalCategoryService } from '../../shared/service/medical-category.service';
import { UserService } from '../../shared/service/user.service';

import { CreateAppoinmentComponent } from './create-appoinment.component';

xdescribe('CreateAppoinmentComponent', () => {
  let component: CreateAppoinmentComponent;
  let fixture: ComponentFixture<CreateAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [CreateAppoinmentComponent],
      providers: [
        HttpService,
        { provide: UserService, useValue: UserService },
        { provide: MedicalCategoryService, useValue: MedicalCategoryService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
