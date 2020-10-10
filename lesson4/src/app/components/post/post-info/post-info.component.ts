import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";
import {decoratorArgument} from "codelyzer/util/astQuery";

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post: Post;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService
              ) {
    this.activatedRoute.params.subscribe(
      data => this.postService.getPostById(data.id).subscribe(
        data => this.post = data))
  }

  ngOnInit(): void {
  }

}
