import { TestBed } from '@angular/core/testing';
import { GolfUserService } from './golf-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GolfUserService', () => {
  let service: GolfUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GolfUserService]
    });

    service = TestBed.get(GolfUserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
