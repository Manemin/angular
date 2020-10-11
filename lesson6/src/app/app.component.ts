import {Component} from '@angular/core';
import {NgModel} from "@angular/forms";
import {User} from "./models/user";
import {UsersService} from "./services/users.service";
import {Post} from "./models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];
  posts: Post[];
  userId: string;
  user: User;

  constructor(private userService: UsersService) {
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }


  getPostsById(id: string) {
    this.userService.getPostsByUserId(id).subscribe(data => this.posts = data);
  }

  withdrawUser(userId: string) {
    this.userService.getUserById(userId).subscribe(data => this.user = data);
  }
}
