import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/user/all-users/all-users.component";
import {UserInfoComponent} from "./components/user/user-info/user-info.component";
import {AllPostsComponent} from "./components/post/all-posts/all-posts.component";
import {AllCommentsComponent} from "./components/comment/all-comments/all-comments.component";
import {PostInfoComponent} from "./components/post/post-info/post-info.component";
import {CommentInfoComponent} from "./components/comment/comment-info/comment-info.component";
import {PostsUserComponent} from "./components/post/posts-user/posts-user.component";

const routes: Routes = [
  {path: 'users', component: AllUsersComponent,
  children: [
    {path: ':id', component: UserInfoComponent,
      children: [
        {path: 'posts', component: PostsUserComponent}
      ]
    }
  ]
  },
  {path: 'posts', component: AllPostsComponent,
    children: [
      {path: ':id', component: PostInfoComponent}
    ]
  },
  {path: 'comments', component: AllCommentsComponent,
    children: [
      {path: ':id', component: CommentInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
