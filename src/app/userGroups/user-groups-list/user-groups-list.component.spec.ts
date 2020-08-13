import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserGroupsListComponent } from './user-groups-list.component';
import { UserGroupsService } from '../user-groups.service';

describe('UserGroupsListComponent', () => {
  let component: UserGroupsListComponent;
  let fixture: ComponentFixture<UserGroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGroupsListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UserGroupsService]
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
