import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/user/all-users/all-users.component";
import {UserInfoComponent} from "./components/user/user-info/user-info.component";
import {AllPostsComponent} from "./components/post/all-posts/all-posts.component";

const routes: Routes = [
  {path: 'users', component: AllUsersComponent,
  children: [
    {path: ':id', component: UserInfoComponent}
  ]
  },
  {path: 'posts', component: AllPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
