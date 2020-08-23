import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TournamentGroupListComponent } from './tournament-group-list/tournament-group-list.component';
import { TournamentGroupEditComponent } from './tournament-group-edit/tournament-group-edit.component';
import { TournamentGroupService } from './tournament-group.service';
import { TOURNAMENTGROUP_ROUTES } from './tournament-group.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TOURNAMENTGROUP_ROUTES)
  ],
  declarations: [
    TournamentGroupListComponent,
    TournamentGroupEditComponent
  ],
  providers: [TournamentGroupService],
  exports: []
})
export class TournamentGroupModule { }
