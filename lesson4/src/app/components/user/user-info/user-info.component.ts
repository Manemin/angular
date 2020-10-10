import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../models/user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo: User;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() =>
    this.userInfo = this.router.getCurrentNavigation().extras.state.user);
  }

  ngOnInit(): void {

  }

}
