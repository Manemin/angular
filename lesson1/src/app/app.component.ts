import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {IPost, IUserModels} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: IPost[] = [];

  constructor(private userService: UserService) {
    userService.getUser().subscribe(posts => this.posts = posts);

  }

}


