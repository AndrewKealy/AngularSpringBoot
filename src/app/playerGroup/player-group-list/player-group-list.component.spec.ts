import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayerGroupListComponent } from './player-group-list.component';
import { PlayerGroupService } from '../player-group.service';
import {OKTA_CONFIG, OktaAuthService} from '@okta/okta-angular';

describe('PlayerGroupListComponent', () => {
  let component: PlayerGroupListComponent;
  let fixture: ComponentFixture<PlayerGroupListComponent>;
  const oktaConfig = {
    issuer: 'https://dev-625433.okta.com',
    clientId: '0oaoom7waz6zj0qFK4x6',
    redirectUri: 'http://localhost:4200'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerGroupListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PlayerGroupService, OktaAuthService, {provide: OKTA_CONFIG, useValue: oktaConfig}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
