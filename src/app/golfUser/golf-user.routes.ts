import { Routes } from '@angular/router';
import { GolfUserListComponent } from './golf-user-list/golf-user-list.component';
import { GolfUserEditComponent } from './golf-user-edit/golf-user-edit.component';

export const GOLFUSER_ROUTES: Routes = [
  {
    path: 'golfUsers',
    component: GolfUserListComponent
  },
  {
    path: 'golfUsers/:id',
    component: GolfUserEditComponent
  }
];
