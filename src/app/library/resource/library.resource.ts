import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LibrariesList, LibraryDetails } from './libraries';
@Injectable({
  providedIn: 'root'
})
export class LibraryResource {

  constructor(private _httpClient: HttpClient) { }

  getLibraries(): Observable<LibrariesList[]> {
    return this._httpClient.get<LibrariesList[]>(`${environment.apiUrl}/libraries`);
  }
  getBooksFromLibrary(libraryId: number): Observable<LibraryDetails[]> {
    return this._httpClient.get<LibraryDetails[]>(`${environment.apiUrl}/libraries/${libraryId}/books/available`);
  }
}
