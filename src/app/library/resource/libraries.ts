export interface LibrariesList {
  libraryId: number;
  name: string;
  city: string;
}

export interface LibraryDetails {
  libraryId: number;
  totalPurchasedByLibrary: number;
  book: {
    bookId: number,
    title: string,
    isbn: string,
    dateOfPublication: Date
  }
}
