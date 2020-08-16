import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class SharedService {

  private playerGroupId = new BehaviorSubject('');
  sharedPlayerGroupId = this.playerGroupId.asObservable();

  private groupName = new BehaviorSubject('');
  sharedGroupName = this.groupName.asObservable();

  constructor() { }

  nextPlayerGroupId(playerGroupId: string) {
    this.playerGroupId.next(playerGroupId);
  }

  nextGroupName(groupName: string) {
    this.groupName.next(groupName);
  }

}
