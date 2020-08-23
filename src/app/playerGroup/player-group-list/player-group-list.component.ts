import { Component, OnInit } from '@angular/core';
import { PlayerGroupFilter } from '../player-group-filter';
import { PlayerGroupService } from '../player-group.service';
import { PlayerGroup } from '../player-group';
import { SharedService } from '../../shared/shared.service';
import { OktaAuthService } from '@okta/okta-angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-player-group',
  templateUrl: 'player-group-list.component.html'
})
export class PlayerGroupListComponent implements OnInit {

  filter = new PlayerGroupFilter();
  selectedPlayerGroup: PlayerGroup;
  feedback: any = {};
  userName: string;
  playerGroupId: string;
  groupName: string;
  totalNumberOfPlayers: number;
  hasAllMembers: boolean;
  public href = '';

  get playerGroupList(): PlayerGroup[] {
    return this.playerGroupService.playerGroupList;
  }

  constructor(private playerGroupService: PlayerGroupService,
              private sharedService: SharedService,
              private oktaAuthService: OktaAuthService,
              private router: Router) {

  }

  async ngOnInit() {
    this.sharedService.sharedPlayerGroupId.subscribe(playerGroupId => this.playerGroupId = playerGroupId);
    this.sharedService.sharedGroupName.subscribe(groupName => this.groupName = groupName);
    this.sharedService.sharedTotalNumberOfPlayers.subscribe(totalNumberOfPlayers => this.totalNumberOfPlayers = totalNumberOfPlayers);
    this.sharedService.sharedHasAllMembers.subscribe(hasAllMembers => this.hasAllMembers = hasAllMembers);
    const userClaims = await this.oktaAuthService.getUser();
    this.userName = userClaims.preferred_username;
    this.filter.groupName = this.groupName;
    this.href = this.router.url;
    this.playerGroupService.load(this.filter);
  }
  search(): void {
    this.playerGroupService.load(this.filter);
  }

  select(selected: PlayerGroup): void {
    this.selectedPlayerGroup = selected;
  }

  delete(playerGroup: PlayerGroup): void {
    if (confirm('Are you sure?')) {
      this.playerGroupService.delete(playerGroup).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }

  newPlayerGroupIdAndTotalMembers(playerGroupId: string, totalNumberOfMembers: number) {
    this.sharedService.nextPlayerGroupId(playerGroupId);
    this.sharedService.nextTotalNumberOfPlayers((totalNumberOfMembers));
  }
  newPlayerGroupId(playerGroupId: string) {
    this.sharedService.nextPlayerGroupId(playerGroupId);
  }


}
