import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {
  userPosts: Post[]

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService
  ) {
    this.activatedRoute.queryParams
      .subscribe(value => this.postService.getPostByUserId(value.id)
        .subscribe(data => this.userPosts = data))
  }

  ngOnInit(): void {
  }

}
