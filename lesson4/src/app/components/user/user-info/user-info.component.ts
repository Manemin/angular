import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo: any = {}

  constructor(private activatedRoute: ActivatedRoute, private userServices: UserService) {
    this.activatedRoute.params
      .subscribe(params => this.userServices.getUserById(params.id)
        .subscribe(data => this.userInfo = data));
  }

  ngOnInit(): void {

  }

}
