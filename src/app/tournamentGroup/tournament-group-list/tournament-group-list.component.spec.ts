import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TournamentGroupListComponent } from './tournament-group-list.component';
import { TournamentGroupService } from '../tournament-group.service';
import {OKTA_CONFIG, OktaAuthModule, OktaAuthService} from '@okta/okta-angular';



describe('TournamentGroupListComponent', () => {
  const oktaConfig = {
    issuer: 'https://dev-625433.okta.com',
    clientId: '0oaoom7waz6zj0qFK4x6',
    redirectUri: 'http://localhost:4200'};
  let component: TournamentGroupListComponent;
  let fixture: ComponentFixture<TournamentGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentGroupListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, OktaAuthModule],
      providers: [TournamentGroupService, OktaAuthService, {provide: OKTA_CONFIG, useValue: oktaConfig}]
    })
      .compileComponents();
  }));




  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
