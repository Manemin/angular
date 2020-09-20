import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost, IUserModels} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/albums')
  }
}
