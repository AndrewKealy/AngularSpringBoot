import { Component, OnInit } from '@angular/core';
import { PlayerGroupFilter } from '../player-group-filter';
import { PlayerGroupService } from '../player-group.service';
import { PlayerGroup } from '../player-group';

@Component({
  selector: 'app-player-group',
  templateUrl: 'player-group-list.component.html'
})
export class PlayerGroupListComponent implements OnInit {

  filter = new PlayerGroupFilter();
  selectedPlayerGroup: PlayerGroup;
  feedback: any = {};

  get playerGroupList(): PlayerGroup[] {
    return this.playerGroupService.playerGroupList;
  }

  constructor(private playerGroupService: PlayerGroupService) {
  }

  ngOnInit() {
    this.search();
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
}
