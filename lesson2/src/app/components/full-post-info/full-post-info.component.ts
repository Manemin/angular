import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/posts";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-full-post-info',
  templateUrl: './full-post-info.component.html',
  styleUrls: ['./full-post-info.component.css']
})
export class FullPostInfoComponent implements OnInit {

id: number

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.id = value.id);
  }

  ngOnInit(): void {
  }

}
