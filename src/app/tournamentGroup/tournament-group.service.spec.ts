import { TestBed } from '@angular/core/testing';
import { TournamentGroupService } from './tournament-group.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TournamentGroupService', () => {
  let service: TournamentGroupService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TournamentGroupService]
    });

    service = TestBed.get(TournamentGroupService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
