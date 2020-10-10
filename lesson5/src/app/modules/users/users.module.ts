import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserComponent } from './components/all-user/all-user.component';
import {UsersService} from "./services/users.service";
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";





@NgModule({
  declarations: [AllUserComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllUserComponent}
    ])
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule { }
