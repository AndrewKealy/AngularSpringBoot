import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserGroupsListComponent } from './user-groups-list/user-groups-list.component';
import { UserGroupsEditComponent } from './user-groups-edit/user-groups-edit.component';
import { UserGroupsService } from './user-groups.service';
import { USERGROUPS_ROUTES } from './user-groups.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(USERGROUPS_ROUTES)
  ],
  declarations: [
    UserGroupsListComponent,
    UserGroupsEditComponent
  ],
  providers: [UserGroupsService],
  exports: []
})
export class UserGroupsModule { }
