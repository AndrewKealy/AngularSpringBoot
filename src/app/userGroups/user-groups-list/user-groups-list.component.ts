import { Component, OnInit } from '@angular/core';
import { UserGroupsFilter } from '../user-groups-filter';
import { UserGroupsService } from '../user-groups.service';
import { UserGroups } from '../user-groups';
import { SharedService } from '../../shared/shared.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-user-groups',
  templateUrl: 'user-groups-list.component.html'
})
export class UserGroupsListComponent implements OnInit {

  filter = new UserGroupsFilter();
  selectedUserGroups: UserGroups;
  feedback: any = {};
  playerGroupId: string;
  userName: string;
  get userGroupsList(): UserGroups[] {
    return this.userGroupsService.userGroupsList;
  }

  constructor(private userGroupsService: UserGroupsService, private sharedService: SharedService, private oktaAuthService: OktaAuthService) {
  }

  async ngOnInit() {
   // new DataManager(this.search).executeLocal(new Query().where('userGroupsId.playerGroupIdEnrolled', 'equal', 1));
  //  this.search();
    const userClaims = await this.oktaAuthService.getUser();
    this.userName = userClaims.preferred_username;
    this.sharedService.sharedPlayerGroupId.subscribe((playerGroupId => this.playerGroupId = playerGroupId));
    this.filter.playerGroupIdEnrolled = this.playerGroupId;
    this.userGroupsService.load(this.filter);
  }

  search(): void {
    this.userGroupsService.load(this.filter);
  }

  select(selected: UserGroups): void {
    this.selectedUserGroups = selected;
  }

  delete(userGroups: UserGroups): void {
    if (confirm('Are you sure?')) {
      this.userGroupsService.delete(userGroups).subscribe(() => {
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
}
