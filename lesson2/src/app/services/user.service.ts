import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPosts} from '../models/posts';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
