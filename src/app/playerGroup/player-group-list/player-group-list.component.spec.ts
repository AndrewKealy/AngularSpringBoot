import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayerGroupListComponent } from './player-group-list.component';
import { PlayerGroupService } from '../player-group.service';

describe('PlayerGroupListComponent', () => {
  let component: PlayerGroupListComponent;
  let fixture: ComponentFixture<PlayerGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerGroupListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PlayerGroupService]
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
