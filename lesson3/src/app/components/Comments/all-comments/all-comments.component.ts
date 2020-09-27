import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../models/comment";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {

  comments: Comment[]

  constructor(private commentServices: CommentService) {
    this.commentServices.getComment().subscribe(data => this.comments = data);
  }

}
