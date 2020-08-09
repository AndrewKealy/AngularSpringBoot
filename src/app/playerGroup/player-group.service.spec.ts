import { TestBed } from '@angular/core/testing';
import { PlayerGroupService } from './player-group.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlayerGroupService', () => {
  let service: PlayerGroupService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerGroupService]
    });

    service = TestBed.get(PlayerGroupService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
