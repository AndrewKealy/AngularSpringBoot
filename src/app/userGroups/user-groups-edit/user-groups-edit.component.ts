import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserGroupsService } from '../user-groups.service';
import { UserGroups } from '../user-groups';
import { UserGroupsId} from '../user-groups-id';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {OktaAuthService} from '@okta/okta-angular';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-user-groups-edit',
  templateUrl: './user-groups-edit.component.html'
})
export class UserGroupsEditComponent implements OnInit {

  id: string;
  userGroups: UserGroups;
  feedback: any = {};
  private userGroupsId: UserGroupsId;
  private groupId: number;
  private userNameForNewUserGroups: string;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userGroupsService: UserGroupsService,
    private oktaAuthService: OktaAuthService,
    private sharedService: SharedService) {
  }

  async ngOnInit() {
    this.sharedService.sharedGroupId.subscribe(groupId => this.groupId = groupId);
    const userClaims = await this.oktaAuthService.getUser();
    this.userNameForNewUserGroups = userClaims.preferred_username;
    console.log(this.userNameForNewUserGroups);

    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {this.userGroupsId = new UserGroupsId();
                             this.userGroupsId.playerGroupIdEnrolled = this.groupId;
                             this.userGroups = new UserGroups(this.userGroupsId);
                             this.userGroups.golfUserName = this.userNameForNewUserGroups;
                             return of(this.userGroups); }
          return this.userGroupsService.findById(id);
        })
      )
      .subscribe(userGroups => {
          this.userGroups = userGroups;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }


  save() {
    this.userGroupsService.save(this.userGroups).subscribe(
      userGroups => {
        this.userGroups = userGroups;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/userGroupses']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/userGroupses']);
  }
}
