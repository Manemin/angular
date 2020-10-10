import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransService {

  userTransfer: BehaviorSubject<any> = new BehaviorSubject<any>('start');

  constructor() { }
}
