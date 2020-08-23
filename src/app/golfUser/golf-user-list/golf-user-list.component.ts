import { Component, OnInit } from '@angular/core';
import { GolfUserFilter } from '../golf-user-filter';
import { GolfUserService } from '../golf-user.service';
import { GolfUser } from '../golf-user';

@Component({
  selector: 'app-golf-user',
  templateUrl: 'golf-user-list.component.html'
})
export class GolfUserListComponent implements OnInit {

  filter = new GolfUserFilter();
  selectedGolfUser: GolfUser;
  feedback: any = {};

  get golfUserList(): GolfUser[] {
    return this.golfUserService.golfUserList;
  }

  constructor(private golfUserService: GolfUserService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.golfUserService.load(this.filter);
  }

  select(selected: GolfUser): void {
    this.selectedGolfUser = selected;
  }

  delete(golfUser: GolfUser): void {
    if (confirm('Are you sure?')) {
      this.golfUserService.delete(golfUser).subscribe(() => {
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
