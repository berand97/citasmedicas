import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { DashboardRoutingModule } from '../../dashboard.routing';
import { MedicalCategoriesComponent } from './medical-categories.component';

describe('MedicalCategoriesComponent', () => {
  let component: MedicalCategoriesComponent;
  let fixture: ComponentFixture<MedicalCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardRoutingModule,
        HttpClientTestingModule
      ],
      declarations: [MedicalCategoriesComponent],
      providers: [
        HttpService
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
