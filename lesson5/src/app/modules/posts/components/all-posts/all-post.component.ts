import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  allPosts: Post[];

  constructor(private postService: PostService) {
    this.postService.getAllPost().subscribe(data => this.allPosts = data)
  }

  ngOnInit(): void {
  }

}
