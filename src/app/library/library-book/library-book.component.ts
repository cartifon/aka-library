import { Component, OnInit } from '@angular/core';
import { EMPTY, from, Subject } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';
import { LibrariesList } from '../resource/libraries';
import { LibraryResource } from '../resource/library.resource';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'library-book',
  templateUrl: './library-book.component.html',
  styleUrls: ['./library-book.component.scss']
})
export class LibraryBookComponent implements OnInit {

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  selectedLibrary$ = this._libraryService.selectedLibrary$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  pageTitle$ = this.selectedLibrary$
    .pipe(
      map((library: LibrariesList) =>
        library ? `Library Books for: ${library.name}` : null)
    );

  books$ = this.selectedLibrary$
    .pipe(
      filter(selectedLibrary => Boolean(selectedLibrary)),
      switchMap(selectedLibrary =>
        from([selectedLibrary.libraryId])
          .pipe(
            mergeMap(libraryId => this._libraryResource.getBooksFromLibrary(libraryId)),
            tap(books => console.log('books', JSON.stringify(books)))
          )));

  constructor(private _libraryService: LibraryService, private _libraryResource: LibraryResource) { }

  ngOnInit(): void {
  }

}
