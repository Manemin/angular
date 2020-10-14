import { Component } from '@angular/core';
import {User} from './interfaces/user';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  arr = ['a', 'b', 'c', 'd'];

  constructor(private userServices: UserService) {
    this.userServices.getUsers().subscribe(value => this.users = value);
  }

}
