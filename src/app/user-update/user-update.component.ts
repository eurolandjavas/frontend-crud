import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = JSON.parse(params['params']['id']);
    });
  }

  update() {
    this.userService.updateUsers(this.user).subscribe( data => {
      this.user = new User();
      this.location.back();
    });
  }

}
