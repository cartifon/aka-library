import { Injectable } from '@angular/core';
import { MemberResource } from '../resource/member.resource';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members$ = this._memberResource.getMembers();

  constructor(private _memberResource: MemberResource) { }
}
