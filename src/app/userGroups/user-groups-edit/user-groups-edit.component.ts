import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserGroupsService } from '../user-groups.service';
import { UserGroups } from '../user-groups';
import { UserGroupsId} from '../user-groups-id';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-groups-edit',
  templateUrl: './user-groups-edit.component.html'
})
export class UserGroupsEditComponent implements OnInit {

  id: string;
  userGroups: UserGroups;
  feedback: any = {};
  private userGroupsId: UserGroupsId;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userGroupsService: UserGroupsService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { this.userGroupsId = new UserGroupsId();
                              return of(new UserGroups(this.userGroupsId)); }
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
    console.log('yyy' + this .userGroups.isOwner);
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
