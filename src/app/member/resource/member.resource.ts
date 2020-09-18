import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MemberList } from './members';

@Injectable({
  providedIn: 'root'
})
export class MemberResource {

  constructor(private _httpClient: HttpClient) { }

  getMembers(): Observable<MemberList[]> {
    return this._httpClient.get<MemberList[]>(`${environment.apiUrl}/members`);
  }
}
