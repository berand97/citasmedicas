import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '@core/services/notification.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    typeDocument: ['', [Validators.required]],
    numberDocument: ['', [Validators.required]],
    healtyCompany: ['', [Validators.required]],
    typeAffiliate: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public activeModal: NgbActiveModal,
    private alertService: NotificationService
  ) { }

  ngOnInit(): void {
  }


  createUser() {
    this.userService.createUser(this.createUserForm.value);
    this.alertService.sucess('el Usuario');
  }



}
