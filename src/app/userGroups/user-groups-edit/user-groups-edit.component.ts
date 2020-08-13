import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserGroupsService } from '../user-groups.service';
import { UserGroups } from '../user-groups';
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
          if (id === 'new') { return of(new UserGroups()); }
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
          this.router.navigate(['/userGroups']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/userGroups']);
  }
}
