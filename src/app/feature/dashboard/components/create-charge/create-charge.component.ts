import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalGlobalService } from '@core/services/modal-global.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChargeService } from '../../shared/service/charge.service';

@Component({
  selector: 'app-create-charge',
  templateUrl: './create-charge.component.html',
  styleUrls: ['./create-charge.component.scss']
})
export class CreateChargeComponent implements OnInit {

  createChargeForm = this.fb.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    percent: [null, [Validators.required, Validators.min(0.0), Validators.max(1)]]
  });

  Charges = [
    {
      name: 'Cargo',
      type: 'Cargo'
    },
    {
      name: 'Descuento',
      type: 'Descuento'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private chargeService: ChargeService,
    private modalGlobalService: ModalGlobalService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  createCharge(){
    this.chargeService.createCharge(this.createChargeForm.value)
    .subscribe( () => {
      this.modalGlobalService.event.emit('close');
    });
  }

}
