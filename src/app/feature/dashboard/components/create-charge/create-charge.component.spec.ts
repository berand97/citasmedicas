import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChargeService } from '../../shared/service/charge.service';

import { CreateChargeComponent } from './create-charge.component';

describe('CreateChargeComponent', () => {
  let component: CreateChargeComponent;
  let fixture: ComponentFixture<CreateChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreateChargeComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpService,
        ChargeService,
        NgbActiveModal,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('error typing a value greater than 1', () => {
    expect(component.createChargeForm.controls.percent.setValue(2)).toBeFalsy();
  });

  it('Create a Discount', () => {
    expect(component.createChargeForm.valid).toBeFalsy();
    component.createChargeForm.controls.name.setValue('Descuento por nomina');
    component.createChargeForm.controls.type.setValue('Descuento');
    component.createChargeForm.controls.percent.setValue(1);
    expect(component.createChargeForm.valid).toBeTruthy();
    expect(component.createChargeForm.valid).toBeTrue();
    component.createCharge();
  });
});
