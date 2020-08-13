import { TestBed } from '@angular/core/testing';
import { UserGroupsService } from './user-groups.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserGroupsService', () => {
  let service: UserGroupsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserGroupsService]
    });

    service = TestBed.get(UserGroupsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
