import { TournamentGroup } from './tournament-group';
import { TournamentGroupFilter } from './tournament-group-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class TournamentGroupService {
  tournamentGroupList: TournamentGroup[] = [];
  api = 'http://localhost:8080/api/tournamentGroups';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<TournamentGroup> {
    const url = `${this.api}/${id}`;
    const params = { tournamentGroupPrimaryKey: id };
    return this.http.get<TournamentGroup>(url, {params, headers});
  }

  load(filter: TournamentGroupFilter): void {
    this.find(filter).subscribe(result => {
        this.tournamentGroupList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: TournamentGroupFilter): Observable<TournamentGroup[]> {
    const params = {
      playerGroupFilter: filter.playerGroupFilter,
    };
    const userTournamentGroups = 'http://localhost:8080/user/tournamentGroups';
    return this.http.get<TournamentGroup[]>(userTournamentGroups, {params, headers});
  }

  save(entity: TournamentGroup): Observable<TournamentGroup> {
    let params = new HttpParams();
    let url = '';
    if (entity.tournamentGroupPrimaryKey) {
      url = `${this.api}/${entity.tournamentGroupPrimaryKey.toString()}`;
      params = new HttpParams().set('ID', entity.tournamentGroupPrimaryKey.toString());
      return this.http.put<TournamentGroup>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<TournamentGroup>(url, entity, {headers, params});
    }
  }

  delete(entity: TournamentGroup): Observable<TournamentGroup> {
    let params = new HttpParams();
    let url = '';
    if (entity.tournamentGroupPrimaryKey) {
      url = `${this.api}/${entity.tournamentGroupPrimaryKey.toString()}`;
      params = new HttpParams().set('ID', entity.tournamentGroupPrimaryKey.toString());
      return this.http.delete<TournamentGroup>(url, {headers, params});
    }
    return null;
  }

}

