export interface MemberList {
  memberId: number;
  fullName: string;
  postalCode: string;
  bookSignedOuts: [
    {
      libraryBookSid: number;
      memberId: number;
      whenSignedOut: Date;
      whenReturned: Date
    }
  ]
}
