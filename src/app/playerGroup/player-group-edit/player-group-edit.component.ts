import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlayerGroupService } from '../player-group.service';
import { PlayerGroup } from '../player-group';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-player-group-edit',
  templateUrl: './player-group-edit.component.html'
})
export class PlayerGroupEditComponent implements OnInit {

  id: string;
  playerGroup: PlayerGroup;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerGroupService: PlayerGroupService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new PlayerGroup()); }
          return this.playerGroupService.findById(id);
        })
      )
      .subscribe(playerGroup => {
          this.playerGroup = playerGroup;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.playerGroupService.save(this.playerGroup).subscribe(
      playerGroup => {
        this.playerGroup = playerGroup;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/playerGroups']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/playerGroups']);
  }
}
