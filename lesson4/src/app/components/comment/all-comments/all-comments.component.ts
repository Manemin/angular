import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../models/comment";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(data=> this.comments = data);
  }

  ngOnInit(): void {
  }

}
