import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TournamentGroupService } from '../tournament-group.service';
import { TournamentGroup } from '../tournament-group';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tournament-group-edit',
  templateUrl: './tournament-group-edit.component.html'
})
export class TournamentGroupEditComponent implements OnInit {

  id: string;
  tournamentGroup: TournamentGroup;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamentGroupService: TournamentGroupService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new TournamentGroup()); }
          return this.tournamentGroupService.findById(id);
        })
      )
      .subscribe(tournamentGroup => {
          this.tournamentGroup = tournamentGroup;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.tournamentGroupService.save(this.tournamentGroup).subscribe(
      tournamentGroup => {
        this.tournamentGroup = tournamentGroup;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/tournamentGroups']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/tournamentGroups']);
  }
}
