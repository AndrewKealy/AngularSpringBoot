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

  private totalNumberOfPlayers = new BehaviorSubject(0);
  sharedTotalNumberOfPlayers = this.totalNumberOfPlayers.asObservable();

  private hasAllMembers = new BehaviorSubject(false);
  sharedHasAllMembers = this.hasAllMembers;

  private groupId = new BehaviorSubject(-1);
  sharedGroupId = this.groupId;

  private playerGroupIdForTournamentGroup = new BehaviorSubject(-1);
  sharedPlayerGroupIdForTournamentGroup = this.playerGroupIdForTournamentGroup;

  constructor() { }

  nextPlayerGroupId(playerGroupId: string) {
    this.playerGroupId.next(playerGroupId);
  }

  nextGroupName(groupName: string) {
    this.groupName.next(groupName);
  }

  nextTotalNumberOfPlayers(totalNumberOfPlayers: number) {
    this.totalNumberOfPlayers.next(totalNumberOfPlayers);
  }

  nextHasAllMembers(hasAllMembers: boolean) {
    this.hasAllMembers.next((hasAllMembers));
  }

  nextGroupId(groupId: number) {
    this.groupId.next(groupId);
  }

  nextPlayerGroupIdForTournamentGroup(playerGroupIdForTournamentGroup: number) {
    this.playerGroupIdForTournamentGroup.next(playerGroupIdForTournamentGroup);
  }


}
