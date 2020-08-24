import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserGroupsListComponent } from './user-groups-list.component';
import { UserGroupsService } from '../user-groups.service';
import {OKTA_CONFIG, OktaAuthService} from '@okta/okta-angular';

describe('UserGroupsListComponent', () => {
  let component: UserGroupsListComponent;
  let fixture: ComponentFixture<UserGroupsListComponent>;
  const oktaConfig = {
    issuer: 'https://dev-625433.okta.com',
    clientId: '0oaoom7waz6zj0qFK4x6',
    redirectUri: 'http://localhost:4200'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGroupsListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UserGroupsService, OktaAuthService, {provide: OKTA_CONFIG, useValue: oktaConfig}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
