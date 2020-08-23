import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GolfUserListComponent } from './golf-user-list/golf-user-list.component';
import { GolfUserEditComponent } from './golf-user-edit/golf-user-edit.component';
import { GolfUserService } from './golf-user.service';
import { GOLFUSER_ROUTES } from './golf-user.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(GOLFUSER_ROUTES)
  ],
  declarations: [
    GolfUserListComponent,
    GolfUserEditComponent
  ],
  providers: [GolfUserService],
  exports: []
})
export class GolfUserModule { }
