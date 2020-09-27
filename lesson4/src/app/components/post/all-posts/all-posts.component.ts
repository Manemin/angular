import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[] = []

  constructor(private postServices: PostService) {
    this.postServices.getPost().subscribe(post=> this.posts = post);
  }

  ngOnInit(): void {
  }

}
