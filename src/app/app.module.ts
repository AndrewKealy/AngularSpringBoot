import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PlayerGroupModule } from './playerGroup/player-group.module';
import { UserGroupsModule } from './userGroups/user-groups.module';
import { GolfUserModule } from './golfUser/golf-user.module';
import { TournamentGroupModule } from './tournamentGroup/tournament-group.module';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    PlayerGroupModule,
    UserGroupsModule,
    NgbModule,
    GolfUserModule,
    TournamentGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
