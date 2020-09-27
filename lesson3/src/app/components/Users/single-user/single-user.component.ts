import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../../../models/users";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  @Input() user: Users

  constructor() { }

}
