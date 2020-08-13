import { Component, OnInit } from '@angular/core';
import { UserGroupsFilter } from '../user-groups-filter';
import { UserGroupsService } from '../user-groups.service';
import { UserGroups } from '../user-groups';

@Component({
  selector: 'app-user-groups',
  templateUrl: 'user-groups-list.component.html'
})
export class UserGroupsListComponent implements OnInit {

  filter = new UserGroupsFilter();
  selectedUserGroups: UserGroups;
  feedback: any = {};

  get userGroupsList(): UserGroups[] {
    return this.userGroupsService.userGroupsList;
  }

  constructor(private userGroupsService: UserGroupsService) {
  }

  ngOnInit() {
    this.search();
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
