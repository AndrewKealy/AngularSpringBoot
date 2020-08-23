import { Routes } from '@angular/router';
import { TournamentGroupListComponent } from './tournament-group-list/tournament-group-list.component';
import { TournamentGroupEditComponent } from './tournament-group-edit/tournament-group-edit.component';

export const TOURNAMENTGROUP_ROUTES: Routes = [
  {
    path: 'tournamentGroups',
    component: TournamentGroupListComponent
  },
  {
    path: 'tournamentGroups/:id',
    component: TournamentGroupEditComponent
  }
];
