import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Users} from "../models/users";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResolveUserService implements Resolve<Users[]>{

  constructor(private userServive: UserService) { }

  resolve(): Observable<Users[]> | Promise<Users[]> | Users[] {
    return this.userServive.getUser();
  }
}
