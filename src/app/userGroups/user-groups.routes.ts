import { Routes } from '@angular/router';
import { UserGroupsListComponent } from './user-groups-list/user-groups-list.component';
import { UserGroupsEditComponent } from './user-groups-edit/user-groups-edit.component';

export const USERGROUPS_ROUTES: Routes = [
  {
    path: 'userGroupses',
    component: UserGroupsListComponent
  },
  {
    path: 'userGroupses/:id',
    component: UserGroupsEditComponent
  }
];
