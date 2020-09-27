import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../models/users";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }
}
