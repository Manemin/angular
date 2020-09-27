import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

  posts: Post[] = []

  constructor(private postServise: PostService) {
    this.postServise.getPost().subscribe(data=> this.posts = data)
  }




}
