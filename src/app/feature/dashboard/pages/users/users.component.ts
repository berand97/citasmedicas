import { Component, OnInit } from '@angular/core';
import { ModalGlobalService } from '@core/services/modal-global.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { User } from '../../shared/interfaces/user.interface';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users: User[];
  listSubscribers: Subscription[] = [];

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private modalGlobalService: ModalGlobalService,
    config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
    this.loadUsers();
    this.listenObserver();
  }

  createUserModal() {
    const modalRef = this.modalService.open(CreateUserComponent, {size: 'lg'})
    modalRef.componentInstance.name = 'Crear Usuario';
  }

  loadUsers() {
    this.userService.getAll()
      .subscribe((data: User[]) => {
        this.users = data;
      })
  }

  listenObserver = () => {
    const observer1$ = this.modalGlobalService.event.subscribe(() => {
      this.loadUsers();
    })

    this.listSubscribers = [observer1$];
  }

  ngOnDestroy(): void {
    this.listSubscribers.map(a => a.unsubscribe());
  }

}
