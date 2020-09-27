import { Component } from '@angular/core';
import {Users} from "../../../models/users";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users: Users[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data=> this.users = data.usr)
  }



}
