import {UserGroupsId} from './user-groups-id';

export class UserGroups {
  constructor(userGroupsId: UserGroupsId) {
    this.userGroupsId = userGroupsId;
  }



  userGroupsPrimaryKey: number;
  userGroupsId: UserGroupsId;
  groupName: string;
  golfUserName: string;
  isOwner: boolean;

}

