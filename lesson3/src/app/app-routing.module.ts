import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from "./components/Users/all-users/all-users.component";
import {ResolveUserService} from "./services/resolve-user.service";
import {AllPostsComponent} from "./components/Posts/all-posts/all-posts.component";
import {AllCommentsComponent} from "./components/Comments/all-comments/all-comments.component";


const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {usr: ResolveUserService}},
  {path: 'posts', component:AllPostsComponent},
  {path: 'comments', component: AllCommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
