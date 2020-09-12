import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";

import { BookShelveComponent } from './components/book-shelve/book-shelve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchBookComponent } from './components/search-book/search-book.component';

@NgModule({
  declarations: [
    BookShelveComponent,
    DashboardComponent,
    SearchBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class CoreModule {
}
