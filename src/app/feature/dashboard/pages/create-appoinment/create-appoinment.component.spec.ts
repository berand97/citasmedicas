import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { DashboardRoutingModule } from '../../dashboard.routing';
import { CreateAppoinmentComponent } from './create-appoinment.component';

describe('CreateAppoinmentComponent', () => {
  let component: CreateAppoinmentComponent;
  let fixture: ComponentFixture<CreateAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule],
      declarations: [CreateAppoinmentComponent],
      providers: [
        HttpService
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

  it('Appoinment date  is required', ()=>{
    const date = component.createAppoinmentForm.get('appoinmentDate')

    date.setValue('');
    expect(date.valid).toBeFalse();
  })

  it('Created appoinment', ()=>{
    expect(component.createAppoinmentForm.valid).toBeFalsy();
    component.createAppoinmentForm.controls.name.setValue('Leonel');
    component.createAppoinmentForm.controls.lastName.setValue('Patiño');
    component.createAppoinmentForm.controls.typeDocument.setValue('Cedula');
    component.createAppoinmentForm.controls.numberDocument.setValue(12345678951235);
    component.createAppoinmentForm.controls.healtyCompany.setValue('Sura');
    component.createAppoinmentForm.controls.typeAffiliate.setValue('Subsidiado');
    component.createAppoinmentForm.controls.priceCategory.setValue(50000);
    component.createAppoinmentForm.controls.discount.setValue(0.5);
    component.createAppoinmentForm.controls.hour.setValue('9:00 - 10:00');
    component.createAppoinmentForm.controls.categoryMedicalName.setValue('Medicina General');
    component.createAppoinmentForm.controls.appoinmentDate.setValue('2022-03-24T20:03:50.534Z');
    component.createAppoinmentForm.controls.total.setValue(25000);
    expect(component.createAppoinmentForm.valid).toBeTruthy();
    component.createAppoinment();
  })

});
