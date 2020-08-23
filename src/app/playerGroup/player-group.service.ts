import { PlayerGroup } from './player-group';
import { PlayerGroupFilter } from './player-group-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {UserGroupsService} from '../userGroups/user-groups.service';


const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PlayerGroupService {
  playerGroupList: PlayerGroup[] = [];
  api = 'http://localhost:8080/api/playerGroups';

  constructor(private http: HttpClient, private userGroupsService: UserGroupsService) {
  }

  findById(id: string): Observable<PlayerGroup> {
    const url = `${this.api}/${id}`;
    const params = { playerGroupId: id };
    return this.http.get<PlayerGroup>(url, {params, headers});
  }

  load(filter: PlayerGroupFilter): void {
    this.find(filter).subscribe(result => {
        this.playerGroupList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PlayerGroupFilter): Observable<PlayerGroup[]> {
    const params = {
     groupName: filter.groupName,
    };
    let usersPlayerGroups = '';
    if (filter.groupName === 'all') {
      usersPlayerGroups = 'http://localhost:8080/playerGroups';
    } else {
      usersPlayerGroups = 'http://localhost:8080/user/groups';
    }
    return this.http.get<PlayerGroup[]>(usersPlayerGroups, {params, headers});

  }

  save(entity: PlayerGroup): Observable<PlayerGroup> {
    let params = new HttpParams();
    let url = '';
    if (entity.playerGroupId) {
      url = `${this.api}/${entity.playerGroupId.toString()}`;
      params = new HttpParams().set('ID', entity.playerGroupId.toString());
      return this.http.put<PlayerGroup>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<PlayerGroup>(url, entity, {headers, params});
    }
  }

  delete(entity: PlayerGroup): Observable<PlayerGroup> {
    let params = new HttpParams();
    let url = '';
    if (entity.playerGroupId) {
      url = `${this.api}/${entity.playerGroupId.toString()}`;
      params = new HttpParams().set('ID', entity.playerGroupId.toString());
      return this.http.delete<PlayerGroup>(url, {headers, params});
    }
    return null;
  }
}

