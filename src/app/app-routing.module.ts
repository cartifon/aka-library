import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'library-list',
  },
  {
    path: 'library-list',
    component: LibraryListComponent
  },
  {
    path: 'member-list',
    component: MemberListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
