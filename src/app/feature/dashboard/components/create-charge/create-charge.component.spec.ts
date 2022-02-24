import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '@core/services/notification.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChargeService } from '../../shared/service/charge.service';

import { CreateChargeComponent } from './create-charge.component';

describe('CreateChargeComponent', () => {
  let component: CreateChargeComponent;
  let fixture: ComponentFixture<CreateChargeComponent>;
  /* let output;
  let alertSpy: NotificationService; */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateChargeComponent],
      imports: [ReactiveFormsModule],
      providers: [
        NgbActiveModal,
        { provide: NotificationService, useValue: new NotificationService() },
        { provide: ChargeService, useValue: ChargeService },
      ]
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

  /* it('Debe crear cargo', ()=>{
    component.createdCharge = output;
    component.createChargeForm.patchValue({
      name:"Descuento del 5%",
      type:"Descuento",
      percent:0.05
    });

    component.createCharge();

    expect(output.emit).toHaveBeenCalled();
    expect(alertSpy.sucess).not.toHaveBeenCalled();
  }) */
});
