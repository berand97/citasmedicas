import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalGlobalService } from '@core/services/modal-global.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
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
    private modalGlobalService: ModalGlobalService,
    private userService: UserService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }


  createUser() {
    this.userService.createUser(this.createUserForm.value)
      .subscribe( () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se ha creado el usuario satisfactoriamente',
          showConfirmButton: false,
          timer: 3000
        });
        this.modalGlobalService.event.emit('close');
      });
  }



}
