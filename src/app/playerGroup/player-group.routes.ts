import { Routes } from '@angular/router';
import { PlayerGroupListComponent } from './player-group-list/player-group-list.component';
import { PlayerGroupEditComponent } from './player-group-edit/player-group-edit.component';

export const PLAYERGROUP_ROUTES: Routes = [
  {
    path: 'playerGroups',
    component: PlayerGroupListComponent
  },
  {
    path: 'playerGroups/:id',
    component: PlayerGroupEditComponent
  }
];
