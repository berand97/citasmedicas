import { Component, OnInit } from '@angular/core';
import { USERS } from '../../shared/mockup/users.mockup';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
