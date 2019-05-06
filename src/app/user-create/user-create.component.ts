import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  user: User = new User();

  constructor(private userService: UserService, private location: Location, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(1)]]
    });
  }
  get f() { return this.myForm.controls; }

  create() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }

    this.userService.createUsers(this.myForm.value).subscribe(data => {
      this.user = new User();
      this.location.back();
    });
  }

}

