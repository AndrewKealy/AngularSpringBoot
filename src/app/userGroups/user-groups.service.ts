import { UserGroups } from './user-groups';
import { UserGroupsFilter } from './user-groups-filter';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class UserGroupsService {
  userGroupsList: UserGroups[] = [];
  api = 'http://localhost:8080/api/userGroupses';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<UserGroups> {
    const url = `${this.api}/${id}`;
    const params = { userGroupsPrimaryKey: id };
    return this.http.get<UserGroups>(url, {params, headers});
  }

  load(filter: UserGroupsFilter): void {
    this.find(filter).subscribe(result => {
        this.userGroupsList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: UserGroupsFilter): Observable<UserGroups[]> {
    const params = {
      playerGroupIdEnrolled: filter.playerGroupIdEnrolled};
    const userGroupses = 'http://localhost:8080/user/userGroupses';
    return this.http.get<UserGroups[]>(userGroupses, {params, headers});
  }

  save(entity: UserGroups): Observable<UserGroups> {
    let params = new HttpParams();
    let url = '';
    if (entity.userGroupsPrimaryKey) {
      url = `${this.api}/${entity.userGroupsPrimaryKey.toString()}`;
      params = new HttpParams().set('ID', entity.userGroupsPrimaryKey.toString());
      return this.http.put<UserGroups>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<UserGroups>(url, entity, {headers, params});
    }
  }

  delete(entity: UserGroups): Observable<UserGroups> {
    let params = new HttpParams();
    let url = '';
    if (entity.userGroupsPrimaryKey) {
      url = `${this.api}/${entity.userGroupsPrimaryKey.toString()}`;
      params = new HttpParams().set('ID', entity.userGroupsPrimaryKey.toString());
      return this.http.delete<UserGroups>(url, {headers, params});
    }
    return null;
  }
}

