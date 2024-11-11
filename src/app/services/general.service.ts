import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private isActive = new BehaviorSubject<boolean>(false)
  isActive$ = this.isActive.asObservable()

  toggleActive(status: boolean) {
   this.isActive.next(status)
  }
  getActiveStatus() {
    return this.isActive.getValue();
  }
  
  constructor() { }
}
