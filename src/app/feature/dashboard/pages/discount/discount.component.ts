import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateChargeComponent } from '../../components/create-charge/create-charge.component';
import { PRICES } from '../../shared/mockup/discount.mockup';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  prices = PRICES;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  createCharge(){
    const modalRef = this.modalService.open(CreateChargeComponent);
    modalRef.componentInstance.name = 'World';
  }

}
