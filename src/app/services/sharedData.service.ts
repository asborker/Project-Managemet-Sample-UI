import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedDataService {

  private userData = new BehaviorSubject<any>({data: []});

  getData(): Observable<any> {
    return this.userData.asObservable();
  }

  sharedUserData = this.userData.asObservable();

  constructor() { }

  setData(data: any) {
    this.userData.next(data)
  }

}