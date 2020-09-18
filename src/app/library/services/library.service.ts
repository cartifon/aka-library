import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { LibraryResource } from '../resource/library.resource';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private librarySelectedSubject = new BehaviorSubject<number>(0);
  librarySelectedAction$ = this.librarySelectedSubject.asObservable();

  libraries$ = this._libraryResource.getLibraries();

  selectedLibrary$ = combineLatest([
    this.libraries$,
    this.librarySelectedAction$
  ])
    .pipe(
      map(([libraries, selectedLibraryId]) =>
        libraries.find(library => library.libraryId === selectedLibraryId)
      ),
      tap(library => console.log('selectedLibrary', library)),
      shareReplay(1)
    );

  constructor(private _libraryResource: LibraryResource) { }

  selectedLibraryChanged(selectedLibraryId: number) {
    this.librarySelectedSubject.next(selectedLibraryId);
  }
}
