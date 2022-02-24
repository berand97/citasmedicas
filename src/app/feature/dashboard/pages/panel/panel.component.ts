import { Component, OnInit } from '@angular/core';
import { Appoinment } from '../../shared/interfaces/appoinment.interface';
import { AppoinmentService } from '../../shared/service/appoinment.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  appoinments: Appoinment[];

  constructor(
    private appoinmentService: AppoinmentService
  ) { }

  ngOnInit(): void {
    this.getAppoinment();
  }

  getAppoinment() {
    this.appoinmentService.getAllAppoinments()
      .subscribe((data: Appoinment[]) => {
        this.appoinments = data;
      });
  }

}
