import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { LibraryResource } from '../resource/library.resource';
import { LibraryService } from '../services/library.service';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  libraries$ = this._libraryService.libraries$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  selectedLibrary$ = this._libraryService.selectedLibrary$;


  constructor(private _libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  onSelected(libraryId: number): void {
    this._libraryService.selectedLibraryChanged(libraryId);
  }

}
