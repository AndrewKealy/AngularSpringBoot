import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GolfUserListComponent } from './golf-user-list.component';
import { GolfUserService } from '../golf-user.service';

describe('GolfUserListComponent', () => {
  let component: GolfUserListComponent;
  let fixture: ComponentFixture<GolfUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GolfUserListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [GolfUserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
