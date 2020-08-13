import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserGroupsEditComponent } from './user-groups-edit.component';
import { UserGroupsService } from '../user-groups.service';

describe('UserGroupsEditComponent', () => {
  let component: UserGroupsEditComponent;
  let fixture: ComponentFixture<UserGroupsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGroupsEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [UserGroupsService]
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
