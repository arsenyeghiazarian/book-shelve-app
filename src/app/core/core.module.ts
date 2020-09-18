import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";

import { BookShelveComponent } from './components/book-shelve/book-shelve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    BookShelveComponent,
    DashboardComponent,
    SearchBookComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
}
