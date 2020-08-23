import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GolfUserEditComponent } from './golf-user-edit.component';
import { GolfUserService } from '../golf-user.service';

describe('GolfUserEditComponent', () => {
  let component: GolfUserEditComponent;
  let fixture: ComponentFixture<GolfUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GolfUserEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [GolfUserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
