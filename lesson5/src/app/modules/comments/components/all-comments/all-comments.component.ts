import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentServices: CommentService) {
    this.commentServices.getAllComments().subscribe(data=> this.comments = data)
  }

  ngOnInit(): void {
  }

}
