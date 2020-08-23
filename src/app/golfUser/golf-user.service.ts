import { GolfUser } from './golf-user';
import { GolfUserFilter } from './golf-user-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class GolfUserService {
  golfUserList: GolfUser[] = [];
  api = 'http://localhost:8080/api/golfUsers';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<GolfUser> {
    const url = `${this.api}/${id}`;
    const params = { golfUserId: id };
    return this.http.get<GolfUser>(url, {params, headers});
  }

  load(filter: GolfUserFilter): void {
    this.find(filter).subscribe(result => {
        this.golfUserList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: GolfUserFilter): Observable<GolfUser[]> {
    const params = {
      userName: filter.userName,
    };

    return this.http.get<GolfUser[]>(this.api, {params, headers});
  }

  save(entity: GolfUser): Observable<GolfUser> {
    let params = new HttpParams();
    let url = '';
    if (entity.golfUserId) {
      url = `${this.api}/${entity.golfUserId.toString()}`;
      params = new HttpParams().set('ID', entity.golfUserId.toString());
      return this.http.put<GolfUser>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<GolfUser>(url, entity, {headers, params});
    }
  }

  delete(entity: GolfUser): Observable<GolfUser> {
    let params = new HttpParams();
    let url = '';
    if (entity.golfUserId) {
      url = `${this.api}/${entity.golfUserId.toString()}`;
      params = new HttpParams().set('ID', entity.golfUserId.toString());
      return this.http.delete<GolfUser>(url, {headers, params});
    }
    return null;
  }
}

