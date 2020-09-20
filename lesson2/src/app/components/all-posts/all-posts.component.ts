import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../models/posts";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: IPosts[] = [];

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {
  }

}
