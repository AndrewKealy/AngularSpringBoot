import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserGroupsEditComponent } from './user-groups-edit.component';
import { UserGroupsService } from '../user-groups.service';
import {OKTA_CONFIG, OktaAuthService} from '@okta/okta-angular';

describe('UserGroupsEditComponent', () => {
  let component: UserGroupsEditComponent;
  let fixture: ComponentFixture<UserGroupsEditComponent>;
  const oktaConfig = {
    issuer: 'https://not-real.okta.com',
    clientId: 'fake-client-id',
    redirectUri: 'http://localhost:4200'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGroupsEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UserGroupsService, OktaAuthService, {provide: OKTA_CONFIG, useValue: oktaConfig}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
