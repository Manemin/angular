import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/posts";


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() singlePost: IPosts

  constructor() { }

  ngOnInit(): void {
  }

}
