import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUSers();
  }

  getAllUSers() {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: number) {
    this.users = this.userService.deleteUser(id);
  }

}
