import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlayerGroupListComponent } from './player-group-list/player-group-list.component';
import { PlayerGroupEditComponent } from './player-group-edit/player-group-edit.component';
import { PlayerGroupService } from './player-group.service';
import { PLAYERGROUP_ROUTES } from './player-group.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PLAYERGROUP_ROUTES)
  ],
  declarations: [
    PlayerGroupListComponent,
    PlayerGroupEditComponent
  ],
  providers: [PlayerGroupService],
  exports: []
})
export class PlayerGroupModule { }
