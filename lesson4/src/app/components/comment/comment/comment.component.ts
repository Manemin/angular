import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/comment";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comm: Comment

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getInfoComment(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
      state: {commId: id}
    })
  }
}
