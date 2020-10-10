import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {DataTransService} from "../../services/data-trans.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor(private dataTransfer: DataTransService) { }

  ngOnInit(): void {
  }

  choose(user: User): void {
    // console.log('save')
    this.dataTransfer.userTransfer.next(user);
    console.log(this.dataTransfer.userTransfer.getValue());
  }
}
