import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['The inital goos','Another silly life goal'])
  goal = this.goals.asObservable();
  constructor() { }
  changeGoal(goal){
    this.goals.next(goal);
  }
}
