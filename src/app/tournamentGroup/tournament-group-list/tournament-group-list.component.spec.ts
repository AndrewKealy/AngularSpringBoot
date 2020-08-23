import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TournamentGroupListComponent } from './tournament-group-list.component';
import { TournamentGroupService } from '../tournament-group.service';

describe('TournamentGroupListComponent', () => {
  let component: TournamentGroupListComponent;
  let fixture: ComponentFixture<TournamentGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentGroupListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TournamentGroupService]
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
