import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.scss']
})
export class CreateAppoinmentComponent implements OnInit {

  minDate: Date;

  constructor() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  ngOnInit(): void {
  }
}
