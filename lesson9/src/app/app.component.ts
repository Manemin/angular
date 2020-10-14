import {Component} from '@angular/core';
import {User} from './interfaces/user';
import {UserService} from './services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from './services/post.service';
import {Post} from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post: Post[];
  users: User[];
  user: User;
  form: FormGroup;
  selectedUser: FormControl = new FormControl('Select User');


  constructor(private userServices: UserService,
              private postServices: PostService
  ) {
    this.form = new FormGroup({
      selectedUser: this.selectedUser,
    });
    this.userServices.getUser().subscribe(value => this.users = value);
  }

  userById(): void {
    this.userServices.getUserById(this.form.value.selectedUser).subscribe(value1 => this.user = value1);

  }

  postUser(): void {
    this.postServices.getPostByUserId(this.form.value.selectedUser).subscribe(post => this.post = post);
  }
}
