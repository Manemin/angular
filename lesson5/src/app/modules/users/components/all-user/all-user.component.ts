import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(data =>this.users = data)
  }

  ngOnInit(): void {
  }

}
