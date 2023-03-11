import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BottomBarLayoutService {

  private _currentPageTitle = new BehaviorSubject<string>('doctors-list');
  constructor() { }

  getCurrentPageTitle () {
    return this._currentPageTitle.value;
  }
  
  getCurrentPageTitleSubs () {
    return this._currentPageTitle.asObservable();
  }

  setCurrentPageTitle (title:string) {
    this._currentPageTitle.next(title);
  }

}
