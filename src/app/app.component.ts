import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Golf Stars';
  isAuthenticated: boolean;
  isCollapsed = true;
  groupName: string;

  constructor(public oktaAuth: OktaAuthService, private sharedService: SharedService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    const userClaims = await this.oktaAuth.getUser();
    const userName = userClaims.name;
    this.sharedService.sharedGroupName.subscribe(groupName => this.groupName = groupName);
  }

  newGroupName(groupName: string) {
    this.sharedService.nextGroupName(groupName);
  }
}
