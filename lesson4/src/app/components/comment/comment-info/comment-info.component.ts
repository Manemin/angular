import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../../models/comment";

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {

  comm:Comment;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {
        const id = this.router.getCurrentNavigation().extras.state;

    })
  }

  ngOnInit(): void {
  }

}
