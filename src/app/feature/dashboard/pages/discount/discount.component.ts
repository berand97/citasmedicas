import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalGlobalService } from '@core/services/modal-global.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CreateChargeComponent } from '../../components/create-charge/create-charge.component';
import { Charge } from '../../shared/interfaces/price.interface';
import { ChargeService } from '../../shared/service/charge.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit, OnDestroy {

  charges = [];
  listSubscribers: Subscription[] = [];

  constructor(
    private modalService: NgbModal,
    private chargesService: ChargeService,
    private modalGlobalService: ModalGlobalService) { }

  ngOnInit(): void {
    this.loadCharges();
    this.listenObserver();
  }

  createCharge() {
    const modalRef = this.modalService.open(CreateChargeComponent);
    modalRef.componentInstance.name = 'World';
  }

  loadCharges() {
    this.chargesService.getAllCharges()
      .subscribe((data: Charge[]) => {
        this.charges = data;
      });
  }

  listenObserver = () => {
    const observer1$ = this.modalGlobalService.event.subscribe(() => {
      this.loadCharges();
    });

    this.listSubscribers = [observer1$];
  }

  ngOnDestroy(): void {
    this.listSubscribers.map(a => a.unsubscribe());
  }

}
